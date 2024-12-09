from flask import Flask, request, render_template, redirect, session
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from .config import Config
import bcrypt

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    CORS(app)
    db.init_app(app)

    class UserCreds(db.Model):
        id = db.Column(db.Integer, primary_key=True)  # Fixed typo: Coloum -> Column
        Username = db.Column(db.String, unique=True, nullable=False)  # Fixed typo
        email = db.Column(db.String, unique=True, nullable=False)  # Fixed typo
        password = db.Column(db.String, nullable=False)  # Fixed typo

        def __init__(self, Username, email, password):
            self.Username = Username
            self.email = email
            self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        def check_password(self, password):
            return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))
        
    with app.app_context():
        db.create_all()

    from app.routes.loginRoute import login_bp
    app.register_blueprint(login_bp, url_prefix='/auth')

    return app 