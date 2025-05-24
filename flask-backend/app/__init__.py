import os
from datetime import timedelta
from flask import Flask

def create_app():
    app = Flask(__name__)

    from dotenv import load_dotenv

    load_dotenv()

    # Register Blueprints with URL prefixes
    from .auth import auth

    app.register_blueprint(auth, url_prefix="/auth")

    return app
