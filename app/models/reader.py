import datetime
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Reader(db.Model, UserMixin):
  __tablename__ = 'readers'

  id = db.Column(db.Integer, primary_key = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  advisor_id = db.Column(db.Integer, db.ForeignKey("advisors.id"))
  created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  reader_profile = db.relationship('ReaderPreference', uselist=False, back_populates="reader")
  advisor = db.relationship('Advisor', back_populates="readers")
  subscription = db.relationship('ReaderSubscription', back_populates="reader_sub")
  order = db.relationship('Order', back_populates="reader_order")
  messages = db.relationship('Message', back_populates="reader_messages")

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "email": self.email,
      "advisor_id": self.advisor_id,
      "type": "Reader",
      "created": self.created_at,
      "updated": self.updated_at
    }
