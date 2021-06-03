from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Reader, ReaderPreference
from app.forms.preference_form import ReaderPreferenceForm

reader_routes = Blueprint('readers', __name__)


@reader_routes.route('/', methods=['GET'])
@login_required
def readers():
    """Get all readers"""
    readers = Reader.query.all()
    return {"readers": [reader.to_dict() for reader in readers]}


@reader_routes.route('/', methods=['POST'])
@login_required
def add_reader_preferences():
    """Post a new reader's quiz to create an account"""
    form = ReaderPreferenceForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_reader_preferences = ReaderPreference(
            user_name=user_name,
            cover_choices=cover_choices,
            genre_choices=genre_choices,
            author_choices=author_choices,
            other_choices=other_choices)
        db.session.add(new_reader_preferences)
        db.session.commit()
        return new_reader_preferences.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@reader_routes.route('/<int:reader_id>', methods=['GET'])
@login_required
def reader(reader_id):
    """Get single reader by id"""
    reader = Reader.query.get(reader_id)
    return reader.to_dict()


@reader_routes.route('/<int:reader_id>/preferences', methods=['GET'])
@login_required
def get_reader_preferences(reader_id):
    """Get single reader's preferences"""
    preferences = ReaderPreference.query.get(reader_id)
    return preferences.to_dict()


@reader_routes.route('/<int:reader_id>/preferences', methods=['PUT'])
@login_required
def edit_reader_preferences(reader_id):
    """Update single reader's preferences"""
    form = ReaderPreferenceForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        updated_preferences = ReaderPreference.query.get(reader_id)
        updated_preferences.user_name = form.data['user_name']
        updated_preferences.cover_choices = form.data['cover_choices']
        updated_preferences.genre_choices = form.data['genre_choices']
        updated_preferences.author_choices = form.data['author_choices']
        updated_preferences.other_choices = form.data['other_choices']
        db.session.add(updated_preferences)
        db.session.commit()
        return updated_preferences.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@reader_routes.route('/<int:reader_id>/preferences', methods=['DELETE'])
@login_required
def delete_reader_preferences(reader_id):
    """Delete single reader's preferences"""
    preferences_to_delete = ReaderPreference.query.get(reader_id)
    db.session.delete(preferences_to_delete)
    db.session.commit()
    return "all good!"