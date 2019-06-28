from app import db, login
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import func, desc, and_
from sqlalchemy.orm import joinedload
from datetime import datetime

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

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def get_bio(self):
        return self.bio[0].get_bio()

    def get_highlights(self):
        formatted_highlight = []
        for h in self.highlights:
            highlight = {}
            if h.track_id:
                highlight['track'] = h.track.name
            if h.album_id:
                highlight['album'] = h.album.name
            if h.artist_id:
                highlight['artist'] = h.artist.name
            formatted_highlight.append(highlight)

        return formatted_highlight

    def get_recent_listens(self, limit):
        recent_listens = [l for l in self.listen[:limit]]

        formatted_listens = []
        for l in recent_listens:
            formatted_listens.append({
                'time': l.time.strftime("%w %b %-I:%M %p"), # TODO(justinmiron): Timezone conversion from UTC
                'track': l.track.name,
                'artist': l.track.artist.name
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
            Listen.time > datetime.fromtimestamp(start_t),
            Listen.time < datetime.fromtimestamp(end_t),
            Listen.track_id == Track.id)
        ).group_by(
            Track.id
        ).order_by(
            desc('count'),
            Listen.track_id
        ).limit(limit).all()


        tracks = []
        for a in d:
            print(datetime.fromtimestamp(start_t), a.Listen.time, datetime.fromtimestamp(end_t))
            tracks.append({
                'artist': a.Listen.track.artist.name,
                'track': a.Listen.track.name,
                'count': a.count
            })

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

    artist = db.relationship('Artist', lazy=True)
    album = db.relationship('Album', lazy=True)

class Album(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'))

class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))

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