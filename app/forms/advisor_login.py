from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Advisor


def advisor_exists(form, field):
    print("Checking if user exists", field.data)
    email = field.data
    advisor = Advisor.query.filter(Advisor.email == email).first()
    if not advisor:
        raise ValidationError("Email provided not found.")


def advisor_password_matches(form, field):
    print("Checking if password matches")
    password = field.data
    email = form.data['email']
    advisor = Advisor.query.filter(Advisor.email == email).first()
    if not advisor:
        raise ValidationError("No such user exists.")
    if not advisor.check_password(password):
        raise ValidationError("Password was incorrect.")


class AdvisorLoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), advisor_exists])
    password = StringField('password', validators=[
                           DataRequired(), advisor_password_matches])
