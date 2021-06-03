from flask_wtf import FlaskForm
from wtforms import StringField, FieldList, TextAreaField, SubmitField
from wtforms.validators import DataRequired
from app.models import ReaderPreference


class ReaderPreferenceForm(FlaskForm):
    user_name = StringField('Username', validators=[DataRequired()])
    cover_choices = StringField('Cover Choices', validators=[DataRequired()])
    genre_choices = FieldList(StringField('Genre Choices', validators=[DataRequired()]))
    author_choices = FieldList(StringField('Author Choices', validators=[DataRequired()]))
    other_choices = TextAreaField('Other Choices', validators=[DataRequired()])
    submit = SubmitField('Submit')
