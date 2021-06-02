import datetime
from .db import db

class ReaderSubscription(db.Model):
  __tablename__ = 'reader_subscriptions'

  id = db.Column(db.Integer, primary_key = True)
  subscription = db.Column(db.String(15))
  """in a real-world app, would never store payment info
  this way for security reasons"""
  payment = db.Column(db.String(19), nullable=False)
  reader_id = db.Column(db.Integer, db.ForeignKey("readers.id"), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  reader_sub = db.relationship('Reader', back_populates="subscription")

  def to_dict(self):
    return {
      "id": self.id,
      "email": self.email,
      "created": self.created_at,
      "updated": self.updated_at
    }
