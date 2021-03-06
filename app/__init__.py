import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, Reader, Advisor
from .api.reader_routes import reader_routes
# from .api.advisor_routes import advisor_routes
from .api.auth_routes import auth_routes
from .api.advisor_routes import advisor_routes
from .api.product_routes import product_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


# @login.user_loader
# def load_advisor(id):
"""Will need to figure this part out for secondary auth"""
#     return Advisor.query.get(int(id))


@login.user_loader
def load_current_user(id):
    login_role = session.get('role')
    if login_role == 'advisor':
        return Advisor.query.get(int(id))
    else:
        return Reader.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(reader_routes, url_prefix='/api/readers')
app.register_blueprint(advisor_routes, url_prefix='/api/advisors')
app.register_blueprint(product_routes, url_prefix='/api/products')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)

# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any 
# request made over http is redirected to https.
# Well.........

@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
