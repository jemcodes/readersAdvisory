from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField
from wtforms.validators import DataRequired
from app.models import Order


class OrderForm(FlaskForm):
    cover_options = StringField('Cover Type', validators=[DataRequired()])
    genre_options = StringField('Genres', validators=[DataRequired()])
    author_options = StringField('Authors', validators=[DataRequired()])
    reader_id = IntegerField('Reader Id', validators=[DataRequired()])
    advisor_id = IntegerField('Advisor Id', validators=[DataRequired()])
    product_id = IntegerField('Product Id', validators=[DataRequired()])
    submit = SubmitField('Submit')
