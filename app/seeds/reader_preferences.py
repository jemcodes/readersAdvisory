# from app.models import db, ReaderPreference

# # Adds demo reader preferences
# def seed_preferences():

#     demo_preferences = ReaderPreference(user_name='Demo_reader',
#                 cover_choices='Hardcover',
#                 genre_choices=['Mystery', 'Thriller'],
#                 author_choices=['Agatha Christie', 'Liane Moriarty'],
#                 other_choices="""I love solving a good mystery right alongside
#                 the main character. Unraveling the perfect crime to find the
#                 culprit will keep me turning pages past my bedtime.""",
#                 reader_id=1)
    
#     bookworm = ReaderPreference(user_name='Book_Worm',
#                 cover_choices='Paperback',
#                 genre_choices=['Romance', 'Speculative Fiction', 'SciFi'],
#                 author_choices=['Courtney Milan', 'Alyssa Cole',
#                 'Ursula K. Le Guin', 'Octavia E. Butler'],
#                 other_choices="""I really just want a good escape. I like
#                 reading a book full of wonder, where the scene feels so real
#                 I forget it's all make-believe.""",
#                 reader_id=2)

#     db.session.add(demo_preferences)
#     db.session.add(bookworm_preferences)

#     db.session.commit()

# # Uses a raw SQL query to TRUNCATE the reader_preferences table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and resets
# # the auto incrementing primary key
# def undo_preferences():
#     db.session.execute('TRUNCATE reader_preferences RESTART IDENTITY CASCADE;')
#     db.session.commit()