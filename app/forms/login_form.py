from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Reader


def reader_exists(form, field):
    print("Checking if user exists", field.data)
    email = field.data
    reader = Reader.query.filter(Reader.email == email).first()
    if not reader:
        raise ValidationError("Email provided not found.")


def password_matches(form, field):
    print("Checking if password matches")
    password = field.data
    email = form.data['email']
    reader = Reader.query.filter(Reader.email == email).first()
    if not reader:
        raise ValidationError("No such user exists.")
    if not reader.check_password(password):
        raise ValidationError("Password was incorrect.")


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), reader_exists])
    password = StringField('password', validators=[
                           DataRequired(), password_matches])
