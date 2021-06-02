from app.models import db, ReaderSubscription

# Adds a demo user, you can add other users here if you want
def seed_subscriptions():

    demoSub = ReaderSubscription(subscription='Monthly',
                payment='1234-5678-1234-5678',
                reader_id=1)
    
    bookwormSub = ReaderSubscription(subscription='Weekly',
                payment='5678-1234-5678-1234',
                reader_id=2)

    db.session.add(demoSub)
    db.session.add(bookwormSub)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the readers table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_subscriptions():
    db.session.execute('TRUNCATE reader_subscriptions RESTART IDENTITY CASCADE;')
    db.session.commit()