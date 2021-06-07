from flask_wtf import FlaskForm
from wtforms import StringField, FieldList, TextAreaField, SubmitField, IntegerField, RadioField, BooleanField
from wtforms.validators import DataRequired
from app.models import ReaderPreference


class ReaderPreferenceForm(FlaskForm):
    user_name = StringField('Username', validators=[DataRequired()])
    cover_choices = RadioField('Cover Choices', validators=[DataRequired()])
    genre_choices = BooleanField('Genre Choices', validators=[DataRequired()])
    author_choices = StringField('Author Choices', validators=[DataRequired()])
    other_choices = TextAreaField('Other Choices', validators=[DataRequired()])
    reader_id = IntegerField('Reader Id', validators=[DataRequired()])
    submit = SubmitField('Submit')
