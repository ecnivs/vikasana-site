from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .config import Config
from flask_jwt_extended import JWTManager
from flask_seasurf import SeaSurf

db = SQLAlchemy()
jwt = JWTManager()
csrf = SeaSurf()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    jwt.init_app(app)

    CORS(app)

    db.init_app(app)
    csrf.init_app(app)

    from app.models import UserCreds, ProjectsTable



    with app.app_context():
        db.create_all()

    from .routes.loginRoute import login_bp
    app.register_blueprint(login_bp, url_prefix='/auth')

    from .routes.getProjects import getpro_bp
    app.register_blueprint(getpro_bp, url_prefix='/dashboard')

    from .routes.createProject import createpro_bp
    app.register_blueprint(createpro_bp, url_prefix='/dashboard')

    return app
