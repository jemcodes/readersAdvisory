import datetime
from .db import db

class Product(db.Model):
  __tablename__ = 'products'

  id = db.Column(db.Integer, primary_key = True)
  cover_type = db.Column(db.String(15))
  genres = db.Column(db.String(19), nullable=False)
  author = db.Column(db.String(100), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)


  def to_dict(self):
    return {
      "id": self.id,
      "cover_type": self.cover_type,
      "genres": self.genres,
      "author_options": self.author_options,
      "author": self.author,
      "created": self.created_at,
      "updated": self.updated_at
    }