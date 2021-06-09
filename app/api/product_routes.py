from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Product

product_routes = Blueprint('products', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


"""---------- Access Products ----------"""

@product_routes.route('/', methods=['GET'])
@login_required
def products():
    """Get all products"""
    products = Product.query.all()
    return {"products": [product.to_dict() for product in products]}


