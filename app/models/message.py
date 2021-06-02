import datetime
from .db import db

class Message(db.Model):
  __tablename__ = 'messages'

  id = db.Column(db.Integer, primary_key = True)
  subject = db.Column(db.String(255), nullable=False)
  message = db.Column(db.Text, nullable=False)
  author = db.Column(db.String(100), nullable=False)
  reader_id = db.Column(db.Integer, db.ForeignKey("readers.id"), nullable=False)
  
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