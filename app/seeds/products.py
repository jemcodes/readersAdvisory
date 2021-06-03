from werkzeug.security import generate_password_hash
from app.models import db, Product

# Adds a demo user, you can add other users here if you want
def seed_products():

    demo_product = Product(title='Northanger Abbey',
                cover_type='Paperback', 
                genres=['Romance', 'Mystery'],
                author=['Jane Austen'])
 
    db.session.add(demo_product)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the readers table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
