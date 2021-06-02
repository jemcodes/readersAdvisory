from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Reader

reader_routes = Blueprint('readers', __name__)


@reader_routes.route('/')
@login_required
def readers():
    readers = Reader.query.all()
    return {"readers": [reader.to_dict() for reader in readers]}


@reader_routes.route('/<int:id>')
@login_required
def reader(id):
    reader = Reader.query.get(id)
    return reader.to_dict()
