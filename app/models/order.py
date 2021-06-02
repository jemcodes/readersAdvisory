import datetime
from .db import db

class Order(db.Model):
  __tablename__ = 'orders'

  id = db.Column(db.Integer, primary_key = True)
  cover_options = db.Column(db.String(15))
  genre_options = db.Column(db.String(19), nullable=False)
  author_options = db.Column(db.Integer, db.ForeignKey("readers.id"), nullable=False)
  reader_id = db.Column(db.Integer, db.ForeignKey("readers.id"), nullable=False)
  advisor_id = db.Column(db.Integer, db.ForeignKey("advisors.id"), nullable=False)
  product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  reader_order = db.relationship('Reader', back_populates="order")
  advisor_order = db.relationship('Advisor', back_populates="order")
  product_order = db.relationship('Product', back_populates="order")
  order_items = db.relationship('OrderProduct', back_populates="current_order")


  def to_dict(self):
    return {
      "id": self.id,
      "cover_options": self.cover_options,
      "genre_options": self.genre_options,
      "author_options": self.author_options,
      "reader_id": self.reader_id,
      "advisor_id": self.advisor_id,
      "product_id": self.product_id,
      "created": self.created_at,
      "updated": self.updated_at
    }
