from flask import Blueprint, request, jsonify
from app.db import get_db

auth = Blueprint("auth", __name__)

@auth.route("testing", methods=["GET"])
def testing():
    print('haha')

    return jsonify({'success': 200})