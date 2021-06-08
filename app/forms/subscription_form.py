from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField
from wtforms.validators import DataRequired
from app.models import ReaderSubscription


class SubscriptionForm(FlaskForm):
    subscription_type = StringField('Subscription Type')
    payment_method = StringField('Payment')
    reader_id = IntegerField('Reader Id', validators=[DataRequired()])
    submit = SubmitField('Submit')
