import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { capturePreferences } from '../store/reader';
import './styles/create-preferences.css';
import bookMagic from '../images/book-magic.png';

const CreatePreferences = () => {
    const [user_name, setUsername] = useState("");
    const [cover_choices, setCoverChoices] = useState("");
    const [genre_choices, setGenreChoices] = useState([]);
    const [author_choices, setAuthorChoices] = useState("");
    const [other_choices, setOtherChoices] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const reader = useSelector(state => state.session.reader);
    // const reader_id = reader.id
    // const reader = useSelector(state => state.session.reader);
    
    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateCoverChoices = (e) => {
        setCoverChoices(e.target.value);
    };

    const updateGenreChoices = (e) => {
        let genre_collection = genre_choices.slice();
        if (genre_collection.includes(e.target.value)) {
            let genreIndex = genre_collection.indexOf(e.target.value)
            genre_collection.splice(genreIndex, 1)
        } else {
            genre_collection.push(e.target.value);
        }
        // console.log(genre_collection)
        setGenreChoices(genre_collection);
    };

    const updateAuthorChoices = (e) => {
        setAuthorChoices(e.target.value);
    };

    const updateOtherChoices = (e) => {
        setOtherChoices(e.target.value);
    };


    const onQuizCompletion = async (e) => {
        e.preventDefault();
        const reader_id = reader.id
        const preferencePayload = {
            user_name,
            cover_choices,
            genre_choices: genre_choices.join(', '),
            author_choices,
            other_choices,
            reader_id
        }
        // console.log('&&&&&&&&&&&&&&&&&', reader.id)
        await dispatch(capturePreferences(preferencePayload))
        history.push(`/readers/${reader_id}/preferences`)

    };

    if (!reader) {
        return <Redirect to="/login" />;
    }

    return (
        <div id="create-preferences-container">
            <img className="create-pref-book-magic" src={bookMagic} />
            <form id="create-preferences-form" onSubmit={onQuizCompletion}>
                <h3 id="create-preferences-title">Create Preferences</h3>
                <div id="create-preferences-username-div">
                    <label id="create-preferences-username-label">Please choose a username</label>
                    <input id="create-preferences-username-input"
                        type="text"
                        name="user_name"
                        onChange={updateUsername}
                        value={user_name}
                        required={true}
                    ></input>
                </div>
                <div id="create-preferences-cover-div">
                    <label className="create-preferences-cover-label">Please select which cover type you prefer:</label>
                    {['Hardcover', 'Paperback', 'No Preference'].map((choice) => (
                        <>
                            <input className="create-preferences-cover-input"
                                id={choice}
                                type="radio"
                                name="cover_choices"
                                onChange={updateCoverChoices}
                                value={choice}
                                required={true}
                            ></input>
                            <label className="create-preferences-cover-label" htmlFor={choice}>{choice}</label>
                        </>
                    ))}
                </div>
                <div id="create-preferences-genre-div">
                    <label className="create-preferences-genre-label">Please select which genres you enjoy:</label>
                    <div id="create-preferences-genre-block">
                        {['Biography', 'Classic Literature', 'Contemporary Literature', 'Crime', 'Fantasy', 'Graphic Novels & Comics', 'LGBTQ+ Fiction', 'Historical Fiction', 'Horror', 'Humor & Comedy', 'Memoir', 'Mystery', 'Nonfiction', 'Paranormal', 'Philosophical', 'Poetry', 'Pulp Fiction', 'Romance', 'Science Fiction', 'Speculative Fiction', 'Suspense', 'Thriller', 'Young Adult'].map((genre) => (
                        <>
                                <input className="create-preferences-genre-input"
                                    type="checkbox"
                                    key={genre}
                                    name="genre_choices"
                                    onChange={updateGenreChoices}
                                    value={genre}
                                ></input>
                                <label className="create-preferences-genre-label" htmlFor={genre}>{genre}</label>
                            </>
                        ))}
                    </div>
                </div>
                <div id="create-preferences-authors-div">
                    <label className="create-preferences-author-label">Please list some authors you like, separated by commas</label>
                    <textarea className="create-preferences-author-input"
                        // type="text"
                        name="author_choices"
                        onChange={updateAuthorChoices}
                        value={author_choices}
                        placeholder="For example: Ursula K. Le Guin, bell hooks, A.K.R. Scott"
                        required={true}
                    />
                </div>
                <div id="create-preferences-notes-div">
                    <label className="create-preferences-notes-label">Please provide any additional information that might help your advisor</label>
                    <textarea className="create-preferences-notes-input"
                        type="text"
                        name="other_choices"
                        onChange={updateOtherChoices}
                        value={other_choices}
                        placeholder="For example: I enjoy books that stretch my imagination and teach me something. I have plenty of time to read right now, so I don't mind something heavier if it will really take me on a journey!"
                        required={true}
                    />
                </div>
                <button id="create-preferences-btn" type="submit">Submit my preferences!</button>
            </form>
        </div>
    );
};

export default CreatePreferences;
