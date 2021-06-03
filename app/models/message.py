import datetime
from .db import db

class Message(db.Model):
  __tablename__ = 'messages'

  id = db.Column(db.Integer, primary_key = True)
  subject = db.Column(db.String(255), nullable=False)
  message = db.Column(db.Text, nullable=False)
  reader_id = db.Column(db.Integer, db.ForeignKey("readers.id"), nullable=False)
  advisor_id = db.Column(db.Integer, db.ForeignKey("advisors.id"), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
  updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)


  def to_dict(self):
    return {
      "id": self.id,
      "subject": self.subject,
      "message": self.message,
      "reader_id": self.reader_id,
      "advisor_id": self.advisor_id,
      "created": self.created_at,
      "updated": self.updated_at
    }