from werkzeug.security import generate_password_hash
from app.models import db, Reader

# Adds a demo user, you can add other users here if you want
def seed_readers():

    demo = Reader(username='Demo', email='demo@aa.io',
                password='password')
    
    bookworm = Reader(username='Bookworm', email='bookworm@aa.io',
                password='password')

    db.session.add(demo)
    db.session.add(bookworm)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the readers table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_readers():
    db.session.execute('TRUNCATE readers RESTART IDENTITY CASCADE;')
    db.session.commit()
