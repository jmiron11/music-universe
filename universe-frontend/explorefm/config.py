import os

class Config(object):
	# Application configurations
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'wingscup2020'

    # SqlAlchemy configurations
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False