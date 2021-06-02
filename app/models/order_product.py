import datetime
from .db import db

class OrderProduct(db.Model):
  __tablename__ = 'order_products'

  id = db.Column(db.Integer, primary_key = True)
  order_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
  product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  current_order = db.relationship('Order', back_populates="order_items")
  current_product = db.relationship('Product', back_populates="product_items")


  def to_dict(self):
    return {
      "id": self.id,
      "order_id": self.order_id,
      "product_id": self.product_id,
      "created": self.created_at,
      "updated": self.updated_at
    }