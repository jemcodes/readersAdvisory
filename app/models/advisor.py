import datetime
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Advisor(db.Model, UserMixin):
  __tablename__ = 'advisors'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(100), nullable = False)
  last_name = db.Column(db.String(100), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  reader_id = db.Column(db.Integer, db.ForeignKey("readers.id"), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  readers = db.relationship('Reader', back_populates="advisor")
  order = db.relationship('Order', back_populates="advisor_order")
  messages = db.relationship('Message', back_populates="advisor_messages")

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
      "first_name": self.first_name,
      "last_name": self.last_name,
      "email": self.email,
      "reader_id": self.reader_id,
      "type": "Advisor",
      "created": self.created_at,
      "updated": self.updated_at
    }