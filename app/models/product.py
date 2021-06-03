import datetime
from .db import db

class Product(db.Model):
  __tablename__ = 'products'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(255))
  cover_type = db.Column(db.String(15))
  genres = db.Column(db.ARRAY(db.Text), nullable=False)
  author = db.Column(db.String(100), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  order = db.relationship('Order', back_populates="product_order")
  product_items = db.relationship('OrderProduct', back_populates="current_product")

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "cover_type": self.cover_type,
      "genres": self.genres,
      "author": self.author,
      "created": self.created_at,
      "updated": self.updated_at
    }