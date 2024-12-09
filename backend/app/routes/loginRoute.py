from flask import Blueprint, request, jsonify, session
from app import db
from app.config import Config
from app import UserCreds  # Importing the UserCreds model
import bcrypt

# Create a Blueprint for login routes
login_bp = Blueprint('login', __name__)

@login_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Query the UserCreds table for the given username
    user = UserCreds.query.filter_by(Username=username).first()

    if user and bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
        # If authentication is successful, store session details
        session['user_id'] = user.id
        session['username'] = user.Username
        return jsonify({'message': 'Login successful', 'username': user.Username}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

@login_bp.route('/logout', methods=['POST'])
def logout():
    # Clear the session to log out the user
    session.clear()
    return jsonify({'message': 'Logout successful'}), 200
