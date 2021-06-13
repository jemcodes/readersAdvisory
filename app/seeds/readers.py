from werkzeug.security import generate_password_hash
from app.models import db, Reader, Advisor

# Adds a demo user, you can add other users here if you want
def seed_readers():

    demo_advisor = Advisor.query.filter_by(email='demo_ad@aa.io').first()

    demo = Reader(email='demo@aa.io',
                password='password',
                advisor_id=demo_advisor.id)
    
    bookworm = Reader(email='bookworm@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    bookdragon = Reader(email='bookdragon@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    lovebooks = Reader(email='lovebooks@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    readwell = Reader(email='readwell@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    db.session.add(demo)
    db.session.add(bookworm)
    db.session.add(bookdragon)
    db.session.add(lovebooks)
    db.session.add(readwell)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the readers table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_readers():
    db.session.execute('TRUNCATE readers RESTART IDENTITY CASCADE;')
    db.session.commit()
