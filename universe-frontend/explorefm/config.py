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

    # 
    BASIC_AUTH_USERNAME = os.environ.get('UNIVERSE_AUTH_USER')
    BASIC_AUTH_PASSWORD = os.environ.get('UNIVERSE_AUTH_PASS')

    # CDN / Static file serving
    IMAGE_SERVING = "http://localhost:80/" 
    IMAGE_SERVING_LOCAL_PATH = "/home/justinm/git/music-universe/images/"

    ALBUM_ART_DIR = "album_art/"
    ARTIST_ART_DIR = "artist_art/"
    PROFILE_PIC_DIR = "profile_pic/"

    TEMP_DIR = "/home/justinm/git/music-universe/temp/"

    PROFILE_PIC_EXTENSIONS = set(['jpg', 'jpeg'])