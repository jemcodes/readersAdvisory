from werkzeug.security import generate_password_hash
from app.models import db, Order

# Adds a demo user, you can add other users here if you want
def seed_orders():

    demo_order = Order(cover_options='Paperback', 
                genre_options=['Mystery, Romance'],
                author_options=['Liane Moriarty', 'Alyssa Cole'],
                reader_id=1,
                advisor_id=1,
                product_id=1)
 
    db.session.add(demo_order)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the readers table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()
