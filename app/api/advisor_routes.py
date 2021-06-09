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
@advisor_routes.route('/<int:advisor_id>/advisees', methods=['GET'])
@login_required
def get_assigned_readers(advisor_id):
    """Get a list of readers assigned to a single advisor"""
    readers = Advisor.query.filter(Advisor.id == advisor_id).join(Reader, Reader.id == Advisor.reader_id).all()
    return readers.to_dict()
