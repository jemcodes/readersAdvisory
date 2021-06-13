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

    ravenreads = Reader(email='ravenreads@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    lovebooks = Reader(email='lovebooks@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    readwell = Reader(email='readwell@aa.io',
                password='password',
                advisor_id=demo_advisor.id)
    
    booksmart = Reader(email='booksmart@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    luckyreads = Reader(email='luckyreads@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    jembooks = Reader(email='jembooks@aa.io',
                password='password',
                advisor_id=demo_advisor.id)
    
    blazereader = Reader(email='blazereader@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    bookdragon = Reader(email='bookdragon@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    kingbooks = Reader(email='kingbooks@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    kafkareader = Reader(email='kafkareader@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    pageturner = Reader(email='pageturner@aa.io',
                password='password',
                advisor_id=demo_advisor.id)
    
    roadtripreader = Reader(email='roadtripreader@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    beachreads = Reader(email='beachreads@aa.io',
                password='password',
                advisor_id=demo_advisor.id)

    db.session.add(demo)
    db.session.add(bookworm)
    db.session.add(ravenreads)
    db.session.add(lovebooks)
    db.session.add(readwell)
    db.session.add(booksmart)
    db.session.add(luckyreads)
    db.session.add(jembooks)
    db.session.add(blazereader)
    db.session.add(bookdragon)
    db.session.add(kingbooks)
    db.session.add(kafkareader)
    db.session.add(pageturner)
    db.session.add(roadtripreader)
    db.session.add(beachreads)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the readers table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_readers():
    db.session.execute('TRUNCATE readers RESTART IDENTITY CASCADE;')
    db.session.commit()
