from flask import render_template, flash, redirect, url_for, request, jsonify
from flask_login import current_user, login_user, logout_user, login_required
from app import app, db, basic_auth
from app.forms import LoginForm, RegistrationForm
from app.models import User, Token, Track, Artist, Album
from app.spotify import get_authorize_url, get_access_token
from werkzeug.urls import url_parse
from werkzeug.utils import secure_filename
import time
import os
from collections import defaultdict

# Web routes endpoints.
@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))

    # User login is accomplished by:
    # 1. User existence is checked by querying the user db. User.query returns None if the user
    #    doesn't exist. 
    # 2. Check that the hash of the user's password equals the hash of the password submitted.
    # 3. Login the user.
    # 4. Redirect back to the page we were at prior.
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('index')
        return redirect(next_page)
    return render_template("login.html", form=form)

@app.route('/')
@app.route('/index')
@basic_auth.required
def index():
    return render_template("index.html")

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/register', methods=['GET', 'POST'])
@basic_auth.required
def register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, you are now a registered user!')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)

@app.route('/user/<username>')
def user(username):
    user = User.query.filter_by(username=username).first_or_404()
    return render_template('profile.html', user=user)

@app.route('/user/<username>/library/')
def user_library(username):
    user = User.query.filter_by(username=username).first_or_404()
    return render_template('library.html', user=user)

@app.route('/user/<username>/listen_explorer/')
def user_loved(username):
    user = User.query.filter_by(username=username).first_or_404()
    return render_template('listen_explorer.html', user=user)

@app.route('/user/<username>/followers/')
def user_followers(username):
    user = User.query.filter_by(username=username).first_or_404()
    return render_template('followers.html', user=user)

@app.route('/user/<username>/following/')
def user_following(username):
    user = User.query.filter_by(username=username).first_or_404()
    return render_template('following.html', user=user)

@app.route('/settings')
@login_required
def settings():
    return render_template('settings.html')

@app.route('/feedback')
def feedback():
    return render_template('feedback.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/donate')
def donate():
    return render_template('donate.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/team')
def team():
    return render_template('team.html')

# Routes for spotify web api authentication.
@app.route('/spotifyconnect')
@login_required
def spotifyconnect():
    return redirect(get_authorize_url())

@app.route('/spotifydisconnect')
@login_required
def spotifydisconnect():
    current_user.unspotify()
    return redirect(url_for('settings'))

@app.route('/authcallback')
@login_required
def authcallback():
    code = request.args.get('code')
    if not code:
        return ('error')
    token = get_access_token(code)
    if token:
        user_token_data = Token.query.filter_by(user_id=current_user.id).first()
        if user_token_data == None: 
            token = Token(access_token=token['access_token'], refresh_token=token['refresh_token'], token_type=token['token_type'], user_id=current_user.id)
            db.session.add(token)
            db.session.commit()
        else:
            user_token_data.access_token = token['access_token']
            user_token_data.refresh_token = token['refresh_token']
            db.session.commit()

    return redirect(url_for('settings'))

# Public user endpoints, no authentication required.
@app.route('/user/<username>/tracks', methods=['GET', 'POST'])
def user_tracks(username):
    t_start = int(request.args.get('t_start', default=time.time()))
    t_end = int(request.args.get('t_end', default=time.time() - 24*60*60))
    aggregate = bool(request.args.get('aggregate', default=True))
    user = User.query.filter_by(username=username).first_or_404()

    return jsonify(user.get_tracks(t_start, t_end, aggregate=aggregate))

@app.route('/user/<username>/bio/', methods=['GET'])
def bio(username):
    user = User.query.filter_by(username=username).first_or_404()
    return user.get_bio()

@app.route('/user/<username>/highlight/', methods=['GET'])
def highlights(username):
    user = User.query.filter_by(username=username).first_or_404()
    return jsonify(user.get_highlights())

@app.route('/user/<username>/top_albums/')
def user_top_album(username):
    t_start = int(request.args.get('t_start', default=0))
    t_end = int(request.args.get('t_end', default=time.time()))
    user = User.query.filter_by(username=username).first_or_404()
    return jsonify(user.get_top_albums(t_start, t_end, 6))

@app.route('/user/<username>/top_artists/')
def user_top_artists(username):
    t_start = int(request.args.get('t_start', default=0))
    t_end = int(request.args.get('t_end', default=time.time()))
    user = User.query.filter_by(username=username).first_or_404()
    return jsonify(user.get_top_artists(t_start, t_end, 6))

@app.route('/user/<username>/listen_stats/')
def user_total_stats(username):
    user = User.query.filter_by(username=username).first_or_404()
    listen_stat = {}
    listen_stat['total'] = user.get_total_listens()
    listen_stat['tracks'] = user.get_unique_tracks()
    listen_stat['albums'] = user.get_unique_albums()
    listen_stat['artists'] = user.get_unique_artists()
    return jsonify(listen_stat) 

@app.route('/user/<username>/recent_listens/')
def user_recent_listens(username):
    count = int(request.args.get('count', default=10))
    user = User.query.filter_by(username=username).first_or_404()
    return jsonify(user.get_recent_listens(count))

@app.route('/user/<username>/searchable_listens/')
def user_searchable_listens(username):
    t_start = int(request.args.get('t_start', default=0))
    t_end = int(request.args.get('t_end', default=time.time()))
    timespan = str(request.args.get('timespan', default='day'))
    track = str(request.args.get('track', default=None))
    album = str(request.args.get('album', default=None)) 
    artist = str(request.args.get('artist', default=None))
    aggregate = bool(request.args.get('aggregate', default=True))
    user = User.query.filter_by(username=username).first_or_404()

    return jsonify(user.get_searchable_listens(t_start, t_end, timespan, track, artist, album, aggregate))

@app.route('/user/<username>/profile_snapshot/')
def user_profile_snapshot(username):
    profile_snapshot = {}
    curr_t = time.time()
    prev_t = curr_t - 60*60*24*30
    user = User.query.filter_by(username=username).first_or_404()   
    profile_snapshot['top_artist'] = user.get_top_artists(prev_t, curr_t, 1)
    profile_snapshot['top_album'] = user.get_top_albums(prev_t, curr_t, 1)
    profile_snapshot['top_track'] = user.get_tracks(prev_t, curr_t, 1)
    profile_snapshot['recent_tracks'] = user.get_recent_listens(5)
    profile_snapshot['img_id'] = user.id

    return jsonify(profile_snapshot)

@app.route('/user/<username>/profile/')
def user_profile(username):
    user = User.query.filter_by(username=username).first_or_404()   
    profile_data = {
        "ProfilePieces": defaultdict(dict),
        "ProfileLayout": {
            "Left": [],
            "Right": []
        }
    }

    if len(user.profile_layout) > 0:
        profile_data["ProfileLayout"] = eval(user.profile_layout[0].layout)
    
    for piece in user.profile_pieces:
        piece_data = profile_data["ProfilePieces"][piece.id]
        piece_data["PieceType"] = piece.piece_type
        piece_data["PieceData"] = eval(piece.piece_options)

        if piece.piece_type == "Bio":
            piece_data["PieceData"]["Text"] = piece.piece_text

        if piece.piece_type == "MusicHighlight":
            if piece_data["PieceData"]["Type"] == "Artist":
                piece_data["PieceData"]["Artist_id"] = piece.refer_artist_id
            elif piece_data["PieceData"]["Type"] == "Album":
                piece_data["PieceData"]["Album_id"] = piece.refer_album_id
            elif piece_data["PieceData"]["Type"] == "Track":
                piece_data["PieceData"]["Track_id"] = piece.refer_track_id
            piece_data["PieceData"]["Note"] = piece.piece_text

    return jsonify(profile_data)

# User data update endpoints
@app.route('/update/highlight/')
@login_required
def update_highlight():
    artist = str(request.args.get('artist', default=""))
    album = str(request.args.get('album', default=""))
    track = str(request.args.get('track', default=""))
    r_artist = str(request.args.get('old_artist', default=""))
    r_album = str(request.args.get('old_album', default=""))
    r_track = str(request.args.get('old_track', default=""))

    highlight_obj = {}
    highlight_obj['artist'] = artist
    if album is not None:
        highlight_obj['album'] = album
    if track is not None:
        highlight_obj['track'] = track

    if highlight_obj['artist'] == "":
        highlight_obj = None

    old_highlight_obj = {}
    old_highlight_obj['artist'] = r_artist
    if r_album is not None:
        old_highlight_obj['album'] = r_album
    if r_track is not None:
        old_highlight_obj['track'] = r_track

    if old_highlight_obj['artist'] == "":
        old_highlight_obj = None

    current_user.replace_highlight(highlight_obj, old_highlight_obj)

    return jsonify(current_user.get_highlights())

@app.route('/update/bio/')
@login_required
def update_bio():
    new_bio = str(request.args.get('bio', default=""))
    current_user.set_bio(new_bio)
    return "" # TODO(justinmiron): Return and handle status code.

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['PROFILE_PIC_EXTENSIONS']

@app.route('/update/timezone/<timezone>/', methods=['GET', 'POST'])
@login_required
def updatetimezone(timezone):
    timezone = timezone.replace("-", "/")
    current_user.set_timezone(timezone)
    return "" # TODO(justinmiron): Return and handle status code.

@app.route('/update/profile_image', methods=['GET', 'POST'])
@login_required
def upload_profile_image():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            extension = file.filename[file.filename.rfind('.') + 1:]
            prefix = str(current_user.id)
            filename = secure_filename(prefix + '.' + extension)
            full_path = os.path.join(app.config['IMAGE_SERVING_LOCAL_PATH'] + app.config['PROFILE_PIC_DIR'], filename)
            file.save(os.path.join(app.config['IMAGE_SERVING_LOCAL_PATH'] + app.config['PROFILE_PIC_DIR'], filename))
            current_user.update_profile_image(full_path)
            return redirect(url_for('user', username=current_user.username))
    return render_template('upload_profile.html', user=current_user)

@app.route('/update/profile_piece', methods=['POST'])
@login_required
def update_profile_piece():
    profile_piece_json = request.get_json()
    returned_obj = current_user.update_profile_piece(profile_piece_json["PieceId"], profile_piece_json["PieceType"], profile_piece_json["PieceData"])

    return jsonify(returned_obj)

@app.route('/update/profile_layout', methods=['POST'])
@login_required
def update_profile_layout():
    profile_layout_json = request.get_json()
    current_user.update_profile_layout(profile_layout_json)
    return "Some data"

@app.route('/update/is_following/<username>/<boolean>', methods=['GET', 'POST'])
@login_required
def update_following(username, boolean):
    if boolean == 'true':
        current_user.follow(username)
        return jsonify(True)
    else:
        current_user.unfollow(username)
        return jsonify(False)

@app.route('/update/love_music/<music_type>/<music_id>', methods=['GET', 'POST'])
@login_required
def update_loved(music_type, music_id):
    current_user.love_music(music_type, music_id)
    return ""

@app.route('/update/unlove_music/<music_type>/<music_id>', methods=['GET', 'POST'])
@login_required
def update_unloved(music_type, music_id):
    current_user.unlove_music(music_type, music_id)
    return ""

@app.route('/import/lastfmcsv', methods=['POST'])
@login_required
def import_lastfmcsv():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and file.filename.rsplit('.', 1)[1].lower() == 'csv':
            extension = file.filename[file.filename.rfind('.') + 1:]
            prefix = str(current_user.id)
            filename = secure_filename(prefix + '.' + extension)
            full_path = os.path.join(app.config['TEMP_DIR'], filename)
            file.save(os.path.join(app.config['TEMP_DIR'], filename))
            current_user.import_from_lastfm(full_path)
    return redirect(url_for('settings'))

# User query endpoints
@app.route('/query/user/me')
def who_am_i():
    return jsonify(current_user.username)

@app.route('/query/user/spotifyconnected')
@login_required
def spotify_connected(): 
    return jsonify(current_user.is_spotified())

@app.route('/query/user/is_following/<username>')
@login_required
def query_is_following(username): 
    return jsonify(current_user.is_following(username))


@app.route('/query/music')
@login_required
def query_music():
    music_type = str(request.args.get('type', default=""))
    music_id = int(request.args.get('id', default=-1))

    music_data = {}
    if music_type == "Track":
        track = Track.query.filter(Track.id==music_id).first()
        if track != None:
            music_data['track'] = track.name
            music_data['album'] = track.album.name
            music_data['artist'] = track.artist.name
            music_data['img_id'] = track.album.id
    elif music_type == "Album":
        album = Album.query.filter(Album.id==music_id).first()
        if album != None:
            music_data['album'] = album.name
            music_data['artist'] = album.artist.name
            music_data['img_id'] = album.id
    elif music_type == "Artist":
        artist = Artist.query.filter(Artist.id==music_id).first()
        if artist != None:
            music_data['artist'] = artist.name
            music_data['img_id'] = artist.id

    return jsonify(music_data) # TODO(justinmiron): This needs to be changed.


@app.route('/test/')
def test():
    t_default = time.time()
    t_start = int(request.args.get('t_start', default=t_default-30*24*60*60))
    t_end = int(request.args.get('t_end', default=t_default))
    timespan = str(request.args.get('timespan', default='day'))
    track = str(request.args.get('track', default=None))
    album = str(request.args.get('album', default=None)) 
    artist = str(request.args.get('artist', default=None))
    aggregate = bool(request.args.get('aggregate', default=True))
    return jsonify(current_user.get_searchable_listens(t_start, t_end, timespan, track, album, artist, aggregate))