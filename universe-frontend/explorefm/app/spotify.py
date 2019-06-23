from spotipy.oauth2 import SpotifyOAuth
from app import app

client_id = app.config['SPOTIFY_ID']
client_secret = app.config['SPOTIFY_SECRET']
redirect = app.config['SPOTIFY_REDIRECT']
oauth = SpotifyOAuth(client_id, client_secret, redirect)

def get_authorize_url():
	return oauth.get_authorize_url()

def get_access_token(code):
	return oauth.get_access_token(code)