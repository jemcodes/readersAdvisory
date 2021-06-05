from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Reader, ReaderPreference
from app.forms.preference_form import ReaderPreferenceForm

reader_routes = Blueprint('readers', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@reader_routes.route('/', methods=['GET'])
@login_required
def readers():
    """Get all readers"""
    readers = Reader.query.all()
    return {"readers": [reader.to_dict() for reader in readers]}


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
    preferences = ReaderPreference.query.filter(ReaderPreference.reader_id == reader_id).first()
    return preferences.to_dict()


@reader_routes.route('/<int:reader_id>/preferences', methods=['POST'])
@login_required
def add_reader_preferences(reader_id):
    """Post a new reader's quiz to create an account"""
    form = ReaderPreferenceForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print('THIS IS THE FORM DATA', form.data, 'THIS IS THE FORM DATA')
        new_reader_preferences = ReaderPreference(
            user_name=form.data['user_name'],
            cover_choices=form.data['cover_choices'],
            genre_choices=form.data['genre_choices'],
            author_choices=form.data['author_choices'],
            other_choices=form.data['other_choices'],
            reader_id=form.data['reader_id'])
        db.session.add(new_reader_preferences)
        db.session.commit()
        return new_reader_preferences.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@reader_routes.route('/<int:reader_id>/preferences', methods=['PUT'])
@login_required
def edit_reader_preferences(reader_id):
    """Update single reader's preferences"""
    form = ReaderPreferenceForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        updated_preferences = ReaderPreference.query.filter(ReaderPreference.reader_id == reader_id).first()
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
    preferences_to_delete = ReaderPreference.query.filter(ReaderPreference.reader_id == reader_id).first()
    db.session.delete(preferences_to_delete)
    db.session.commit()
    return "all good!"


@reader_routes.route('/<int:reader_id>', methods=['DELETE'])
@login_required
def delete_reader_account(reader_id):
    """Delete single reader's account"""
    account_to_delete = Reader.query.filter(Reader.reader_id == reader_id).first()
    db.session.delete(account_to_delete)
    db.session.commit()
    return "all gone!"