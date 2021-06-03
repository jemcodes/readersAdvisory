from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Reader, ReaderPreference

reader_routes = Blueprint('readers', __name__)


@reader_routes.route('/')
@login_required
def readers():
    readers = Reader.query.all()
    return {"readers": [reader.to_dict() for reader in readers]}


@reader_routes.route('/<int:readerId>')
@login_required
def reader(readerId):
    reader = Reader.query.get(readerId)
    return reader.to_dict()


@reader_routes.route('/<int:readerId>/preferences')
@login_required
def reader_preferences(readerId):
    preferences = ReaderPreference.query.get(readerId)
    return preferences.to_dict()

