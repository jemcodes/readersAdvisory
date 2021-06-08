from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Advisor

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
    advisor = Advisor.query.get(advisor_id)
    return advisor.to_dict()
