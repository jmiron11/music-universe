from app import db, login
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import func, desc, and_
from sqlalchemy.orm import joinedload
from datetime import datetime, tzinfo
import pytz

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    bio = db.relationship('ProfileBio', backref='user', lazy=True)
    token = db.relationship('Token', backref='user', lazy=True)
    highlights = db.relationship('ProfileHighlight', lazy=True)
    listen = db.relationship('Listen', lazy=True, order_by="desc(Listen.time)")
    settings = db.relationship('Settings', lazy=True)

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def get_bio(self):
        if not self.bio:
            return ""
        else:
            return self.bio[0].get_bio()

    def set_bio(self, bio):
        if len(self.bio) > 0:
            print('Setting the bio to: %s' % bio)
            self.bio[0].bio = bio
            db.session.commit()
        else:
            u_bio = ProfileBio(bio=bio, user_id=self.id)
            db.session.add(u_bio)
            db.session.commit()

    def get_highlights(self):
        formatted_highlight = []
        for h in self.highlights:
            highlight = {}
            if h.track_id:
                highlight['track'] = h.track.name
            if h.album_id:
                highlight['album'] = h.album.name
                highlight['img_id'] = h.album.album_art[0].id
            if h.artist_id:
                highlight['artist'] = h.artist.name
                album = Album.query.filter(
                        Album.artist_id==h.artist.id
                        ).first()
                highlight['img_id'] = album.album_art[0].album_id
            formatted_highlight.append(highlight)

        return formatted_highlight

    def get_recent_listens(self, limit):
        recent_listens = [l for l in self.listen[:limit]]

        # Get offset and create timedelta object.
        timezone = pytz.timezone(self.get_timezone())
        current = datetime.now()
        timedelta = timezone.utcoffset(current)

        formatted_listens = []
        for l in recent_listens:
            dt = l.time + timedelta
            formatted_listens.append({
                'time': dt.strftime("%-d %b %-I:%M %p"), # TODO(justinmiron): Timezone conversion from UTC
                'track': l.track.name,
                'artist': l.track.artist.name,
                'img_id': str(l.track.album.id)
            })

        return formatted_listens

    def get_total_listens(self):
        return db.session.query(
            User.listen
        ).count()

    def get_unique_tracks(self):
        return db.session.query(
            User.listen
        ).group_by(Listen.track_id).count()

    def get_unique_albums(self):
        return db.session.query(User.listen, Track).filter(Listen.track_id == Track.id).group_by(Track.album_id).count()

    def get_unique_artists(self):
        return db.session.query(User.listen, Track).filter(Listen.track_id == Track.id).group_by(Track.artist_id).count()

    # start_t and end_t are seconds since epoch
    def get_tracks(self, start_t, end_t, limit=5, aggregate=True):
        d = db.session.query(
            Listen, func.count(Track.id).label('count')
        ).filter(and_(
            Listen.user_id == self.id,
            Listen.time > datetime.utcfromtimestamp(start_t),
            Listen.time < datetime.utcfromtimestamp(end_t),
            Listen.track_id == Track.id)
        ).group_by(
            Track.id
        ).order_by(
            desc('count'),
            Listen.track_id
        ).limit(limit).all()

        tracks = []
        for a in d:
            track_data = {}
            track_data['artist'] = a.Listen.track.artist.name
            track_data['track'] = a.Listen.track.name
            track_data['count'] = a.count
            track_data['img_id'] = str(a.Listen.track.album.id)
            tracks.append(track_data)

        return tracks

    def is_spotified(self):
        if len(self.token) > 0 and self.token[0].refresh_token is not None:
            return True
        else:
            return False

    def unspotify(self):
        if len(self.token) > 0 and self.token[0].refresh_token is not None:
            self.token[0].refresh_token = None
            self.token[0].access_token = None
            db.session.commit()

    def get_timezone(self):
        if len(self.settings) > 0:
            return self.settings[0].timezone
        else:
            u_settings = Settings(timezone='UTC', user_id=self.id)
            db.session.add(u_settings)
            db.session.commit()
            return 'UTC'

    def set_timezone(self, new_timezone):
        if len(self.settings) > 0:
            print('Setting timezone')
            self.settings[0].timezone = new_timezone
            db.session.commit()
        else:
            u_settings = Settings(timezone='UTC', user_id=self.id)
            db.session.add(u_settings)
            db.session.commit()
            return 'UTC'

    def replace_highlight(self, new_highlight, old_highlight):
        if new_highlight is not None:
            artist = Artist.query.filter(Artist.name==new_highlight['artist']).first()
            album = None
            if 'album' in new_highlight and artist != None:
                album = Album.query.filter(
                    and_(
                        Album.name==new_highlight['album'], 
                        Artist.id==artist.id
                        )).first()

            track = None
            if 'track' in new_highlight and album != None:
                track = Track.query.filter(
                    and_(
                        Track.name==new_highlight['track'], 
                        Album.id==album.id
                        )).first()

            # ID's used to create new profile highlight objects.
            artist_id = artist.id
            if album is not None:
                album_id = album.id
            else:
                album_id = None

            if track is not None:
                track_id = track.id
            else:
                track_id = None

            u_highlight = ProfileHighlight(user_id=self.id, artist_id=artist_id, album_id=album_id, track_id=track_id)
            db.session.add(u_highlight)

            if old_highlight is None:
                db.session.commit()

        if old_highlight is not None:
            artist = Artist.query.filter(Artist.name==old_highlight['artist']).first()
            album = None
            if 'album' in old_highlight and artist != None:
                album = Album.query.filter(
                    and_(
                        Album.name==old_highlight['album'], 
                        Artist.id==artist.id
                        )).first()

            track = None
            if 'track' in old_highlight and album != None:
                track = Track.query.filter(
                    and_(
                        Track.name==old_highlight['track'], 
                        Album.id==album.id
                        )).first()

            # ID's used to create new profile highlight objects.
            artist_id = artist.id
            if album is not None:
                album_id = album.id
            else:
                album_id = None

            if track is not None:
                track_id = track.id
            else:
                track_id = None

            u_highlight = ProfileHighlight.query.filter(and_(ProfileHighlight.user_id==self.id, ProfileHighlight.artist_id==artist_id, ProfileHighlight.album_id==album_id, ProfileHighlight.track_id==track_id)).first()
            db.session.delete(u_highlight)
            db.session.commit()


    def get_top_albums(self, count=8):
        d = db.session.query(
            Listen, func.count(Track.album_id).label('count')
        ).filter(and_(
            Listen.user_id == self.id,
            Listen.track_id == Track.id)
        ).group_by(
            Track.album_id
        ).order_by(
            desc('count'),
            Track.album_id
        ).limit(count).all()

        tracks = []
        for a in d:
            track_data = {}
            track_data['artist'] = a.Listen.track.artist.name
            track_data['album'] = a.Listen.track.album.name
            track_data['count'] = a.count
            track_data['img_id'] = str(a.Listen.track.album.id)
            tracks.append(track_data)

        return tracks



class ProfileBio(db.Model):
    __tablename__ = 'profile_bio'

    id = db.Column(db.Integer, primary_key=True)
    bio = db.Column(db.String(500))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def get_bio(self):
        return self.bio

class ProfileHighlight(db.Model):
    __tablename__ = 'profile_highlight'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'))
    album_id = db.Column(db.Integer, db.ForeignKey('album.id'))
    track_id = db.Column(db.Integer, db.ForeignKey('track.id'))

    track = db.relationship('Track', lazy=True)
    artist = db.relationship('Artist', lazy=True)
    album = db.relationship('Album', lazy=True)

class Track(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'))
    album_id = db.Column(db.Integer, db.ForeignKey('album.id'))
    spotify_id = db.Column(db.String(30))

    artist = db.relationship('Artist', lazy=True)
    album = db.relationship('Album', lazy=True)

class Album(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'))
    spotify_id = db.Column(db.String(30))

    artist = db.relationship('Artist', lazy=True)

    album_art = db.relationship('AlbumArt', lazy=False)

class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    spotify_id = db.Column(db.String(30))

class Listen(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    track_id = db.Column(db.Integer, db.ForeignKey('track.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    track = db.relationship('Track', lazy=True)
     
class Token(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    access_token = db.Column(db.String(155), unique=True)
    refresh_token = db.Column(db.String(155), unique=True)
    token_type = db.Column(db.String(20))
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), unique=True)

    def __repr__(self):
        return '<Token {0}, Refresh {1}, User {2}>'.format(self.access_token, self.refresh_token, self.user_id)


class AlbumArt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    path_small = db.Column(db.String(300), unique=True)
    path_medium = db.Column(db.String(300), unique=True)
    album_id = db.Column(db.Integer, db.ForeignKey(Album.id), unique=True)


class Settings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timezone = db.Column(db.String(50))
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), unique=True)