from app import db, login
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
     
class Token(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    access_token = db.Column(db.String(155), unique=True)
    refresh_token = db.Column(db.String(155), unique=True)
    token_type = db.Column(db.String(20))
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), unique=True)

    def __repr__(self):
        return '<Token {0}, Refresh {1}, User {2}>'.format(self.access_token, self.refresh_token, self.user_id)