from app.models import db, ReaderSubscription

# Adds a demo user, you can add other users here if you want
def seed_subscriptions():

    demoSub = ReaderSubscription(subscription='Monthly',
                payment='4556-6811-0650-7020',
                reader_id=1)
    
    bookwormSub = ReaderSubscription(subscription='Weekly',
                payment='4485-8468-7764-9196',
                reader_id=2)
    
    ravenreadsSub = ReaderSubscription(subscription='Quarterly',
                payment='4532-9731-5071-0876',
                reader_id=3)

    lovebooksSub = ReaderSubscription(subscription='Monthly',
                payment='4532-3969-5790-6085',
                reader_id=4)

    readwellSub = ReaderSubscription(subscription='Weekly',
                payment='4929-6706-9704-4675',
                reader_id=5)

    booksmartSub = ReaderSubscription(subscription='Quarterly',
                payment='4614-3699-6417-7033',
                reader_id=6)

    luckyreadsSub = ReaderSubscription(subscription='Monthly',
                payment='4539-6327-5796-7221',
                reader_id=7)

    jembooksSub = ReaderSubscription(subscription='Weekly',
                payment='4485-4887-1160-4481',
                reader_id=8)

    blazereaderSub = ReaderSubscription(subscription='Quarterly',
                payment='4024-0071-1164-6609',
                reader_id=9)

    bookdragonSub = ReaderSubscription(subscription='Monthly',
                payment='4556-5462-9522-6148',
                reader_id=10)

    kingbooksSub = ReaderSubscription(subscription='Weekly',
                payment='4916-4810-3499-2013',
                reader_id=11)

    kafkareaderSub = ReaderSubscription(subscription='Quarterly',
                payment='4556-8095-3830-1536',
                reader_id=12)

    pageturnerSub = ReaderSubscription(subscription='Monthly',
                payment='4916-0260-9823-6870',
                reader_id=13)
    
    roadtripreaderSub = ReaderSubscription(subscription='Weekly',
                payment='4031-9591-5858-8782',
                reader_id=14)

    beachreadsSub = ReaderSubscription(subscription='Quarterly',
                payment='4674-5223-7347-6316',
                reader_id=15)

    db.session.add(demoSub)
    db.session.add(bookwormSub)
    db.session.add(ravenreadsSub)
    db.session.add(bookwormSub)
    db.session.add(lovebooksSub)
    db.session.add(readwellSub)
    db.session.add(booksmartSub)
    db.session.add(luckyreadsSub)
    db.session.add(jembooksSub)
    db.session.add(blazereaderSub)
    db.session.add(bookdragonSub)
    db.session.add(kafkareaderSub)
    db.session.add(pageturnerSub)
    db.session.add(roadtripreaderSub)
    db.session.add(beachreadsSub)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the readers table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_subscriptions():
    db.session.execute('TRUNCATE reader_subscriptions RESTART IDENTITY CASCADE;')
    db.session.commit()