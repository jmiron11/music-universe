from app import db, login, app
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import func, desc, and_
from sqlalchemy.orm import joinedload
from datetime import datetime, tzinfo
import pytz
import time

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
    image = db.relationship('ProfileImage', lazy=True)

    following = db.relationship('Follow', foreign_keys='Follow.from_id', lazy=True, backref="from_user")
    followers = db.relationship('Follow', foreign_keys='Follow.to_id', lazy=True, backref="to_user")

    loved_music = db.relationship('LovedMusic', lazy=True)

    profile_pieces = db.relationship('ProfilePiece', lazy=True)
    profile_layout = db.relationship('ProfileLayout', lazy=True)

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
            self.bio[0].bio = bio
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
            is_loved = db.session.query(
                LovedMusic.is_loved
            ).filter(and_(
                LovedMusic.user_id == self.id,
                LovedMusic.track_id == l.track.id
            )).first()

            if is_loved == None:
                is_loved = False
            else:
                is_loved = bool(is_loved[0])

            dt = l.time + timedelta
            formatted_listens.append({
                'time': dt.strftime("%-d %b %-I:%M %p"), # TODO(justinmiron): Timezone conversion from UTC
                'track_id': l.track.id,
                'track': l.track.name,
                'artist': l.track.artist.name,
                'img_id': str(l.track.album.id),
                'is_loved': is_loved
            })

        return formatted_listens

    def get_total_listens(self):
        return db.session.query(
            User.listen
        ).filter(
            self.id == Listen.user_id
        ).count()

    def get_unique_tracks(self):
        return db.session.query(
            User.listen
        ).filter(
            self.id == Listen.user_id
        ).group_by(Listen.track_id).count()

    def get_unique_albums(self):
        return db.session.query(
            User.listen, Track
        ).filter(
            and_(self.id == Listen.user_id,
            Listen.track_id == Track.id)
        ).group_by(
            Track.album_id
        ).count()

    def get_unique_artists(self):
        return db.session.query(
            User.listen, Track
        ).filter(
            and_(self.id == Listen.user_id,
            Listen.track_id == Track.id)
        ).group_by(
            Track.artist_id
        ).count()

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

            is_loved = db.session.query(
                LovedMusic.is_loved
            ).filter(and_(
                LovedMusic.user_id == self.id,
                LovedMusic.track_id == a.Listen.track.id
            )).first()

            if is_loved == None:
                is_loved = False
            else:
                is_loved = bool(is_loved[0])

            track_data = {}
            track_data['track_id'] = a.Listen.track.id
            track_data['artist'] = a.Listen.track.artist.name
            track_data['track'] = a.Listen.track.name
            track_data['count'] = a.count
            track_data['img_id'] = str(a.Listen.track.album.id)
            track_data['is_loved'] = is_loved
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


    def get_top_albums(self, start_t=0, end_t=time.time(), limit=5):
        d = db.session.query(
            Listen, func.count(Track.album_id).label('count')
        ).filter(and_(
            Listen.user_id == self.id,
            Listen.time > datetime.utcfromtimestamp(start_t),
            Listen.time < datetime.utcfromtimestamp(end_t),
            Listen.track_id == Track.id)
        ).group_by(
            Track.album_id
        ).order_by(
            desc('count'),
            Track.album_id
        ).limit(limit).all()

        albums = []
        for a in d:

            is_loved = db.session.query(
                LovedMusic.is_loved
            ).filter(and_(
                LovedMusic.user_id == self.id,
                LovedMusic.album_id == a.Listen.track.album.id
            )).first()

            if is_loved == None:
                is_loved = False
            else:
                is_loved = bool(is_loved[0])

            album_data = {}
            album_data['album_id'] = a.Listen.track.album.id
            album_data['album'] = a.Listen.track.album.name
            album_data['artist'] = a.Listen.track.artist.name
            album_data['count'] = a.count
            album_data['img_id'] = str(a.Listen.track.album.id)
            album_data['is_loved'] = is_loved
            albums.append(album_data)

        return albums

    def get_top_artists(self, start_t, end_t, limit=5):
        d = db.session.query(
            Listen, func.count(Track.artist_id).label('count')
        ).filter(and_(
            Listen.user_id == self.id,
            Listen.time > datetime.utcfromtimestamp(start_t),
            Listen.time < datetime.utcfromtimestamp(end_t),
            Listen.track_id == Track.id)
        ).group_by(
            Track.artist_id
        ).order_by(
            desc('count'),
            Track.artist_id
        ).limit(limit).all()

        artists = []
        for a in d:

            is_loved = db.session.query(
                LovedMusic.is_loved
            ).filter(and_(
                LovedMusic.user_id == self.id,
                LovedMusic.artist_id == a.Listen.track.artist.id
            )).first()

            if is_loved == None:
                is_loved = False
            else:
                is_loved = bool(is_loved[0])

            artist_data = {}
            artist_data['artist_id'] = a.Listen.track.artist.id
            artist_data['artist'] = a.Listen.track.artist.name
            artist_data['count'] = a.count
            artist_data['img_id'] = str(a.Listen.track.artist.id)
            artist_data['is_loved'] = is_loved
            artists.append(artist_data)

        return artists

    def update_profile_image(self, path):
        u_image = ProfileImage(user_id=self.id, path=path)
        if len(self.image) > 0:
            self.image[0].path = path
        else:
            db.session.add(u_image)
        db.session.commit()

    def get_profile_image_path(self):
        if len(self.image) > 0:
            full_path = self.image[0].path
            postfix = full_path[full_path.rfind('/') + 1:]
            remote_path = app.config['IMAGE_SERVING'] + app.config['PROFILE_PIC_DIR'] + postfix
        else:
            remote_path = app.config['IMAGE_SERVING'] + app.config['PROFILE_PIC_DIR'] + 'no_profile.jpg'
        return remote_path

    def is_following(self, username):
        user_id = User.query.with_entities(
                User.id).filter_by(username=username).first()

        if user_id == None:
            return False

        follow = db.session.query(
                Follow
            ).with_entities(
                Follow.is_following
            ).filter(
                and_(
                Follow.to_id == user_id,
                self.id == Follow.from_id)
            ).first()

        if follow == None:
            return False
        else:
            return follow

    def follow(self, username):
        user_id = User.query.with_entities(
                User.id).filter_by(username=username).first()

        if user_id == None:
            return False

        follow = db.session.query(
                Follow
            ).filter(
                and_(
                Follow.to_id == user_id,
                self.id == Follow.from_id)
            ).first()

        if follow == None:
            u_follow = Follow(from_id=self.id, to_id=user_id, is_following=True, first_time_followed=datetime.now())
            db.session.add(u_follow)
        else:
            follow.is_following = True

        db.session.commit()

    def unfollow(self, username):
        user_id = User.query.with_entities(
                User.id).filter_by(username=username).first()

        if user_id == None:
            return False

        follow = Follow.query.filter(
                and_(
                Follow.to_id == user_id,
                self.id == Follow.from_id)
            ).first()

        follow.is_following = False
        db.session.commit()

    def get_followers(self):
        user_followers = []

        follower_data = {}
        followers = db.session.query(Follow).filter(and_(Follow.is_following==True, Follow.to_id == self.id)).all()
        for u in followers:
            follower_data['username'] = u.from_user.username
            follower_data['img_path'] = u.from_user.get_profile_image_path()
            user_followers.append(follower_data)

        return user_followers

    def get_following(self):
        user_following = []

        following_data = {}
        following = db.session.query(Follow).filter(and_(Follow.is_following==True, Follow.from_id == self.id)).all()
        for u in following:
            following_data['username'] = u.to_user.username
            following_data['img_path'] = u.to_user.get_profile_image_path()
            user_following.append(following_data)

        return user_following

    def love_music(self, music_type, music_id):
        if music_type == 'track':
            db_field = LovedMusic.track_id
        elif music_type == 'album':
            db_field = LovedMusic.album_id
        else:
            db_field = LovedMusic.artist_id

        entry = db.session.query(LovedMusic).filter(
            and_(
                LovedMusic.user_id == self.id,
                db_field == music_id
            )).first()

        if entry == None:
            if music_type == 'track':
                u_loved = LovedMusic(user_id=self.id, track_id=music_id, is_loved=True, first_time_loved=datetime.now())
            elif music_type == 'album':
                u_loved = LovedMusic(user_id=self.id, album_id=music_id, is_loved=True, first_time_loved=datetime.now())
            else:
                u_loved = LovedMusic(user_id=self.id, artist_id=music_id, is_loved=True, first_time_loved=datetime.now())

            db.session.add(u_loved)
        else:
            entry.is_loved = True
            entry.last_time_loved = datetime.now()

        db.session.commit()

    def unlove_music(self, music_type, music_id):
        if music_type == 'track':
            music_type = LovedMusic.track_id
        elif music_type == 'album':
            music_type = LovedMusic.album_id
        else:
            music_type = LovedMusic.artist_id
        entry = db.session.query(LovedMusic).filter(
            and_(
                LovedMusic.user_id == self.id,
                music_type == music_id
            )).first()

        entry.is_loved = False
        db.session.commit()

    def update_profile_piece(self, piece_id, piece_type, piece_options):
        if piece_id < 0:
            if piece_type == "TopTracks":
                u_piece = ProfilePiece(user_id = self.id, piece_type=str(piece_type), piece_options=str(piece_options))
            elif piece_type == "TopAlbums":
                u_piece = ProfilePiece(user_id = self.id, piece_type=str(piece_type), piece_options=str(piece_options))
            elif piece_type == "TopArtists":
                u_piece = ProfilePiece(user_id = self.id, piece_type=str(piece_type), piece_options=str(piece_options))
            elif piece_type == "Bio":
                bio = str(piece_options["Text"])
                piece_options.pop("Text")
                u_piece = ProfilePiece(user_id = self.id, piece_type=str(piece_type), piece_options=str(piece_options), piece_text=bio) 
            elif piece_type == "ListenSummary":
                pass
            elif piece_type == "RecentListens":
                u_piece = ProfilePiece(user_id = self.id, piece_type=str(piece_type), piece_options=str(piece_options))
            elif piece_type == "MusicHighlight":
                pass

            if u_piece: #Remove once all entries create u_piece
                db.session.add(u_piece)
                db.session.commit()
                db.session.flush()
                return u_piece.id
            else:
                return -1000
        else:
            entry = db.session.query(ProfilePiece).filter(
            and_(
                ProfilePiece.user_id == self.id,
                ProfilePiece.id == piece_id
            )).first()

            if (piece_type == "Delete"):
                db.session.delete(entry)
            else:
                entry.piece_type = str(piece_type)
                if piece_type in ["TopTracks", "TopAlbums", "TopArtists", "ListenSummary", "RecentListens", "MusicHighlight"]:
                    entry.piece_options = str(piece_options)
                elif piece_type == "Bio":
                    bio = str(piece_options["Text"])
                    piece_options.pop("Text")
                    entry.piece_text = bio

            db.session.commit()
            return entry.id

    def update_profile_layout(self, profile_layout):
        if len(self.profile_layout) > 0:
            self.profile_layout[0].layout = str(profile_layout)
        else:
            u_profile_layout = ProfileLayout(user_id=self.id, layout=str(profile_layout))
            db.session.add(u_profile_layout)
        db.session.commit()


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

    artist_art = db.relationship('ArtistArt', lazy=False)

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

class ArtistArt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    path_small = db.Column(db.String(300), unique=True)
    path_medium = db.Column(db.String(300), unique=True)
    artist_id = db.Column(db.Integer, db.ForeignKey(Artist.id), unique=True)

class Settings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timezone = db.Column(db.String(50))
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), unique=True)

class ProfileImage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    path = db.Column(db.String(300), unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), unique=True)

class Follow(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    from_id = db.Column(db.Integer, db.ForeignKey(User.id))
    to_id = db.Column(db.Integer, db.ForeignKey(User.id))
    is_following = db.Column(db.Boolean)
    first_time_followed = db.Column(db.DateTime)

class MessageThread(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    posted_by = db.Column(db.Integer, db.ForeignKey(User.id))
    posted_to = db.Column(db.Integer, db.ForeignKey(User.id))
    text = db.Column(db.String(500))
    is_public = db.Column(db.Boolean)
    is_read = db.Column(db.Boolean)
    refer_track_id = db.Column(db.Integer, db.ForeignKey(Track.id))
    refer_album_id = db.Column(db.Integer, db.ForeignKey(Album.id))
    refer_artist_id = db.Column(db.Integer, db.ForeignKey(Artist.id))
    time_posted = db.Column(db.DateTime)

class LovedMusic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    track_id = db.Column(db.Integer, db.ForeignKey(Track.id))
    album_id = db.Column(db.Integer, db.ForeignKey(Album.id))
    artist_id = db.Column(db.Integer, db.ForeignKey(Artist.id))
    is_loved = db.Column(db.Integer)
    first_time_loved = db.Column(db.DateTime)
    last_time_loved = db.Column(db.DateTime)

class ProfilePiece(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    piece_type = db.Column(db.String(30))
    piece_options = db.Column(db.String(500))
    refer_track_id = db.Column(db.Integer, db.ForeignKey(Track.id))
    refer_album_id = db.Column(db.Integer, db.ForeignKey(Album.id))
    refer_artist_id = db.Column(db.Integer, db.ForeignKey(Artist.id))
    piece_text = db.Column(db.String(500))
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))

class ProfileLayout(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    layout = db.Column(db.String(500))
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
