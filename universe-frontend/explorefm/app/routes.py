from flask import render_template, flash, redirect, url_for, request
from flask_login import current_user, login_user, logout_user, login_required
from app import app, db, basic_auth
from app.forms import LoginForm, RegistrationForm
from app.models import User, Token
from app.spotify import get_authorize_url, get_access_token
from werkzeug.urls import url_parse

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
@login_required
def user(username):
    user = User.query.filter_by(username=username).first_or_404()
    return render_template('user.html', user=user)

@app.route('/spotifyconnect')
@login_required
def spotifyconnect():
    return redirect(get_authorize_url())

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

    return redirect(url_for('user', username=current_user.username))