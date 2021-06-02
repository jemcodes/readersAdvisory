from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Reader


def reader_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    reader = Reader.query.filter(Reader.email == email).first()
    if reader:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), reader_exists])
    password = StringField('password', validators=[DataRequired()])
