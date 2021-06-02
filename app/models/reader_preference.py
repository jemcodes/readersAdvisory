# import datetime
# from .db import db

# class Reader_Preference(db.Model):
#   __tablename__ = 'reader_preferences'

#   id = db.Column(db.Integer, primary_key = True)
#   user_name = db.Column(db.String(100), nullable = False, unique = True)
#   cover_choices = db.Column(db.String(15), nullable = False)
#   genre_choices = db.Column(db.ARRAY(String), nullable = False)
#   author_choices = db.Column(db.ARRAY(String), nullable = False)
#   other_choices = db.Column(db.Text, nullable = False)
#   reader_id = db.Column(db.Integer, db.ForeignKey("readers.id"), nullable=False)
#   created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
#   updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable = False)
#   reader = db.relationship('Reader', back_populates="reader_profile")

#   def to_dict(self):
#     return {
#       "id": self.id,
#       "user_name": self.user_name,
#       "cover_choices": self.cover_choices,
#       "genre_choices": self.genre_choices,
#       "author_choices": self.author_choices,
#       "other_choices": self.other_choices,
#       "reader_id": self.reader_id,
#       "created": self.created_at,
#       "updated": self.updated_at
#     }
