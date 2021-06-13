from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Advisor, Order, Reader, ReaderPreference

advisor_routes = Blueprint('advisors', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


"""---------- Access Advisors ----------"""

@advisor_routes.route('/', methods=['GET'])
@login_required
def advisors():
    """Get all advisors"""
    advisors = Advisor.query.all()
    return {"advisors": [advisor.to_dict() for advisor in advisors]}


@advisor_routes.route('/<int:advisor_id>', methods=['GET'])
@login_required
def advisor(advisor_id):
    """Get a single advisor by id"""
    advisor = Advisor.query.get(advisor_id)
    return advisor.to_dict()


"""---------- Advisor-Reader Views ----------"""

@advisor_routes.route('/<int:advisor_id>/readers', methods=['GET'])
@login_required
def get_assigned_readers(advisor_id):
    """For a single advisor, get their assigned readers and a list of each reader's preferences"""
    readers = Reader.query.filter(Reader.advisor_id == advisor_id).join(ReaderPreference).all()
    reader_collection = []
    for reader in readers:
        new_reader = reader.to_dict()
        new_reader['user_name'] = reader.reader_profile.user_name
        reader_collection.append(new_reader)
    return {"readers": reader_collection}


# @advisor_routes.route('/<int:advisor_id>/readers/<int:reader_id>/preferences', methods=['GET'])
# @login_required
# def get_reader_preferences(advisor_id, reader_id):
#     """Get a list of a single reader's preferences"""
#     readers = Reader.query.filter(Reader.id == reader_id).first()
#     return readers.to_dict()


"""---------- Advisor-Order Interactions ----------"""
@advisor_routes.route('/<int:advisor_id>/orders', methods=['GET'])
@login_required
def get_assigned_orders(advisor_id):
    """Get a list of orders assigned to a single advisor"""
    orders = Order.query.filter(Order.advisor_id == advisor_id).all()
    return {"orders": [order.to_dict() for order in orders]}

# @advisor_routes.route('/<int:advisor_id>/orders', methods=['POST'])
# @login_required
# def add_new_order(advisor_id):
#     """Post a new order"""
#     form = OrderForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         new_reader_order = Order(
#             cover_options=form.data['cover_options'],
#             genre_options=form.data['genre_options'],
#             author_options=form.data['author_options'],
#             reader_id=form.data['reader_id'],
#             advisor_id=form.data['advisor_id'],
#             product_id=form.data['product_id'])
#         db.session.add(new_reader_order)
#         db.session.commit()
#         return new_reader_order .to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# @advisor_routes.route('/<int:advisor_id>/orders/<int:order_id>', methods=['PUT'])
# @login_required
# def edit_order(advisor_id, order_id):
#     """Update single order"""
#     form = OrderForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         updated_order = Order.query.filter(Order.id == order_id).first()
#         updated_order.cover_options = form.data['cover_options']
#         updated_order.genre_options = form.data['genre_options']
#         updated_order.author_options = form.data['author_options']
#         updated_order.reader_id = form.data['reader_id']
#         updated_order.advisor_id = form.data['advisor_id']
#         updated_order.product_id = form.data['product_id']
#         db.session.add(updated_order)
#         db.session.commit()
#         return updated_order.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# @advisor_routes.route('/<int:advisor_id>/orders/<int:order_id>', methods=['DELETE'])
# @login_required
# def delete_reader_preferences(advisor_id, order_id):
#     """Delete single order"""
#     order_to_delete = Order.query.filter(Order.id == order_id).first()
#     db.session.delete(order_to_delete)
#     db.session.commit()
#     return "all good!"


