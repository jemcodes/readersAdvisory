from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Advisor

advisor_routes = Blueprint('advisors', __name__)


@advisor_routes.route('/')
@login_required
def advisors():
    advisors = Advisor.query.all()
    return {"advisors": [advisor.to_dict() for advisor in advisors]}


@advisor_routes.route('/<int:id>')
@login_required
def advisor(id):
    advisor = Advisor.query.get(id)
    return advisor.to_dict()
