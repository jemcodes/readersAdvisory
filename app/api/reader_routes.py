from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Advisor, Message, OrderProduct, Order, Product, ReaderPreference, ReaderSubscription, Reader
from app.forms.preference_form import ReaderPreferenceForm
from app.forms.subscription_form import SubscriptionForm

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


"""---------- Access Readers ----------"""

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


"""---------- Reader Preferences ----------"""

@reader_routes.route('/<int:reader_id>/preferences', methods=['GET'])
@login_required
def get_reader_preferences(reader_id):
    """Get single reader's preferences"""
    preferences = ReaderPreference.query.filter(ReaderPreference.reader_id == reader_id).first()
    if preferences:
        return preferences.to_dict()
    else: 
        return {}


@reader_routes.route('/<int:reader_id>/preferences', methods=['POST'])
@login_required
def add_reader_preferences(reader_id):
    """Post a new reader's quiz to create an account"""
    form = ReaderPreferenceForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
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


"""---------- Reader Subscription ----------"""
@reader_routes.route('/<int:reader_id>/subscriptions', methods=['GET'])
@login_required
def subscription_status(reader_id):
    """See a single reader's subscription status"""
    subscription = ReaderSubscription.query.filter(ReaderSubscription.reader_id == reader_id).first()
    if subscription:
        return subscription.to_dict()
    else:
        return {}


@reader_routes.route('/<int:reader_id>/subscriptions', methods=['POST'])
@login_required
def add_subscription(reader_id):
    """Add a subscription for a single reader"""
    form = SubscriptionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_subscription = ReaderSubscription(
            subscription = form.data['subscription_type'],
            payment = form.data['payment_method'],
            reader_id = form.data['reader_id']
        )
        db.session.add(new_subscription)
        db.session.commit()
        return new_subscription.to_dict()
    return form.errors


@reader_routes.route('/<int:reader_id>/subscriptions', methods=['PUT'])
@login_required
def edit_reader_subscription(reader_id):
    """Update single reader's preferences"""
    form = SubscriptionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        updated_subscription = ReaderSubscription.query.filter(ReaderSubscription.reader_id == reader_id).first()
        updated_subscription.subscription = form.data['subscription_type']
        updated_subscription.payment = form.data['payment_method']
        db.session.add(updated_subscription)
        db.session.commit()
        return updated_subscription.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@reader_routes.route('/<int:reader_id>/subscriptions', methods=['DELETE'])
@login_required
def delete_from_cart(reader_id):
    """Delete a subscription from a single reader"""
    subscription_to_delete = ReaderSubscription.query.filter(ReaderSubscription.reader_id == reader_id).first()
    db.session.delete(subscription_to_delete)
    db.session.commit()
    return 'subscription deleted!'


"""---------- Reader Account Deletion ----------"""

@reader_routes.route('/<int:reader_id>', methods=['DELETE'])
@login_required
def delete_reader_account(reader_id):
    """Delete single reader's account"""
    sub_to_delete = ReaderSubscription.__table__.delete().where(ReaderSubscription.reader_id == reader_id)
    db.session.execute(sub_to_delete)
    db.session.commit()
    pref_to_delete = ReaderPreference.__table__.delete().where(ReaderPreference.reader_id == reader_id)
    db.session.execute(pref_to_delete)
    db.session.commit()
    account_to_delete = Reader.query.filter(Reader.id == reader_id).first()
    db.session.delete(account_to_delete)
    db.session.commit()
    return "all gone!"