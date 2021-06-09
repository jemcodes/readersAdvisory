from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Advisor

advisor_routes = Blueprint('advisors', __name__)


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


"""---------- Advisor-Reader Interactions ----------"""
