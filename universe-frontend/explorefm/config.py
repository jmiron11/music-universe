import os

class Config(object):
	# Application configurations
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'wingscup2020'

    # SqlAlchemy configurations
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Spotify configurations
    SPOTIFY_ID = os.environ.get('SPOTIFY_ID')
    SPOTIFY_SECRET = os.environ.get('SPOTIFY_SECRET')
    SPOTIFY_REDIRECT = "http://localhost:5000/authcallback"