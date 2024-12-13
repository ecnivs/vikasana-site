from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app import db
from app.models import UserCreds
from sqlalchemy import inspect

getpro_bp = Blueprint('getpro', __name__)

@getpro_bp.route('/getpro', methods=['GET'])
@jwt_required(locations=["cookies"])
def getpro():
    user_id = get_jwt_identity()
    user = UserCreds.query.filter_by(id=user_id).first()
    if not user:
        return jsonify({"message": "User not found"}), 401

    username = user.username
    projects = []

    inspector = inspect(db.engine)
    for i in inspector.get_table_names():
        project = db.metadata.tables.get(i)
        if project is None:
            continue
        if 'username' in project.columns:
            result = db.session.query(project).filter_by(username=username).first()
            if result:
                projects.append(i)
    return jsonify({"projects": projects}), 200