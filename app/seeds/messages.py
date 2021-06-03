from werkzeug.security import generate_password_hash
from app.models import db, Message

# Adds a demo user, you can add other users here if you want
def seed_messages():

    demo_message_1 = Message(subject='Upcoming Order', 
                message="""Hi there! Any special requests for your upcoming
                order?""",
                reader_id=1,
                advisor_id=1)
 
    db.session.add(demo_message_1)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the readers table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_messages():
    db.session.execute('TRUNCATE advisors RESTART IDENTITY CASCADE;')
    db.session.commit()
