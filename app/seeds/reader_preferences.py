from app.models import db, ReaderPreference

# Adds demo reader preferences
def seed_preferences():

    demo_preferences = ReaderPreference(user_name='Demo_reader',
                cover_choices='Hardcover',
                genre_choices= 'Mystery, Thriller, Crime, Suspense',
                author_choices='Agatha Christie, Liane Moriarty, Arthur Conan Doyle, James Patterson',
                other_choices="""I love solving a good mystery right alongside the main character. Unraveling the perfect crime to find the culprit will keep me turning pages past my bedtime.""",
                reader_id=1)
    
    bookworm_preferences = ReaderPreference(user_name='Book_Worm',
                cover_choices='Paperback',
                genre_choices= 'Romance, Speculative Fiction, SciFi',
                author_choices= 'Courtney Milan, Alyssa Cole, Ursula K. Le Guin, Octavia E. Butler',
                other_choices="""I really just want a good escape. I like reading a book full of wonder, where the scene feels so real I forget it's all make-believe.""",
                reader_id=2)
    
    ravenreads_preferences = ReaderPreference(user_name='RavenReads',
                cover_choices='Hardcover',
                genre_choices= 'Horror, Mystery, Poetry, Science Fiction',
                author_choices='Edgar Allan Poe, Henry James, Bram Stoker, Mary Shelley',
                other_choices="""If it's eerie and gothic makes me kinda question my own humanity or the world at large, I can't get enough of it.""",
                reader_id=3)
    
    lovebooks_preferences = ReaderPreference(user_name='l0veb00ks',
                cover_choices='Paperback',
                genre_choices= 'Romance, Classic Literature, Historical Fiction',
                author_choices= 'Kate Alcott, Hilary Mantel, Jane Austen, Charles Dickens',
                other_choices="""I'm a little all over the place, depending on my mood. Most of the time, I want to be reading a classic or something that feels like a classic.'""",
                reader_id=4)

    readwell_preferences = ReaderPreference(user_name='read_well',
                cover_choices='Hardcover',
                genre_choices= 'Biography, Memoir, Nonfiction, Philosophical',
                author_choices='Yuval Noah Harari, Ibram X. Kendi, Michelle Alexander',
                other_choices="""I don't mind a book that makes me think, and I don't mind books that are hard to read. I prefer to use my reading time to expand my knowledge.""",
                reader_id=5)
    
    booksmart_preferences = ReaderPreference(user_name='Booksmart',
                cover_choices='Paperback',
                genre_choices= 'Nonfiction, Philosophical',
                author_choices= 'Joshua Foer, Ta-Nehisi Coates, Peter Godfrey-Smith',
                other_choices="""My only real rule is that I should feel smarter after I read something.""",
                reader_id=6)

    luckyreads_preferences = ReaderPreference(user_name='luckyreads',
                cover_choices='Hardcover',
                genre_choices= 'Fantasy',
                author_choices='J. R. R. Tolkien, Neil Gaiman, Diana Wynne Jones, Jim Butcher',
                other_choices="""I devour books that take me to new worlds. The bigger and more involved, the better. Please introduce me to my next fandom!""",
                reader_id=7)
    
    jembooks_preferences = ReaderPreference(user_name='JEMBooks',
                cover_choices='Paperback',
                genre_choices= 'Romance, Speculative Fiction, Fantasy, Paranormal',
                author_choices= 'A.K.R.Scott, A.L. Jackson, Autumn Jones Lake, Dannika Dark',
                other_choices="""I enjoy reading romance because I love watching characters fall in love. I'm great with some mystery, and paranormal or fantasy elements are great, too. And don't be afraid to send me something that will make me look at the world differently!""",
                reader_id=8)

    blazereader_preferences = ReaderPreference(user_name='Blaze_Reader',
                cover_choices='Hardcover',
                genre_choices= 'Graphic Novels & Comics, Humor & Comedy, Pulp Fiction',
                author_choices='Charles Forsman, David Sedaris, Catherine Lucille Moore',
                other_choices="""I like books that are visual, either because they actually have pictures or because of their prose style. I love to laugh and big, absurd stories are my favorite.""",
                reader_id=9)
    
    bookdragon_preferences = ReaderPreference(user_name='b00kdrag0n',
                cover_choices='Paperback',
                genre_choices= 'Fantasy, Speculative Fiction, SciFi, Young Adult',
                author_choices= 'Ursula K. Le Guin, Ibi Zoboi, Cassandra Clare',
                other_choices="""I like big stories that make me dream about what the world would be like if things were super different.""",
                reader_id=10)

    kingbooks_preferences = ReaderPreference(user_name='kingbooks',
                cover_choices='Hardcover',
                genre_choices= 'Horror, Thriller, Suspense',
                author_choices='Stephen King',
                other_choices="""I'm mostly only interested in Stephen King, but I'm using my free credit to see if you can find me anything I'll like as much as his stuff.""",
                reader_id=11)
    
    kafkareader_preferences = ReaderPreference(user_name='Kafka_Reader',
                cover_choices='Paperback',
                genre_choices= 'Philosophical, Speculative Fiction',
                author_choices= 'Franz Kafka, Chuck Palahniuk, Bret Easton Ellis, Albert Camus',
                other_choices="""If it's gonna make me question my very existence and what's real around me, I want to read it.""",
                reader_id=12)

    pageturner_preferences = ReaderPreference(user_name='PageTurner',
                cover_choices='Hardcover',
                genre_choices= 'Mystery, Fantasy, Historical Fiction',
                author_choices='Mercedes Lackey, Patricia Cornwell, Diana Gabaldon',
                other_choices="""If you can find historical fiction novels that also include mystery and fantasy elements, I'd be over the moon!""",
                reader_id=13)
    
    roadtripreader_preferences = ReaderPreference(user_name='RoadtripReader',
                cover_choices='Paperback',
                genre_choices= 'Biography, Philosophical, Memoir',
                author_choices= 'Jack Kerouac, John Steinbeck, Robert Pirsig',
                other_choices="""I don't have as much time to travel these days, so I'm finding my escape in reading about other journeys.""",
                reader_id=14)

    beachreads_preferences = ReaderPreference(user_name='bEaChReAdS',
                cover_choices='Hardcover',
                genre_choices= 'Contemporary Literature, Romance, Young Adult',
                author_choices='Elin Hilderbrand, Jennifer Weiner, Dorothea Benton Frank',
                other_choices="""I love to read at the beach! And when I can't be at the beach, I want to read about being at the beach! Toes in the water, drink in the sand 4 LYFE!!""",
                reader_id=15)

    db.session.add(demo_preferences)
    db.session.add(bookworm_preferences)
    db.session.add(ravenreads_preferences)
    db.session.add(lovebooks_preferences)
    db.session.add(readwell_preferences)
    db.session.add(booksmart_preferences)
    db.session.add(luckyreads_preferences)
    db.session.add(jembooks_preferences)
    db.session.add(blazereader_preferences)
    db.session.add(bookdragon_preferences)
    db.session.add(kingbooks_preferences)
    db.session.add(kafkareader_preferences)
    db.session.add(pageturner_preferences)
    db.session.add(roadtripreader_preferences)
    db.session.add(beachreads_preferences)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the reader_preferences table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_preferences():
    db.session.execute('TRUNCATE reader_preferences RESTART IDENTITY CASCADE;')
    db.session.commit()