import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { NavLink, useHistory, useParams, Redirect } from 'react-router-dom';
import { showPreferences, updatePreferences, deletePreferences } from '../store/reader';
// import { deleteAccount } from '../store/session';
import './styles/update-preferences.css';
import bookFlame from '../images/book-flame.png';

const UpdatePreferencesForm = () => {
    const { reader_id } = useParams();

    const reader = useSelector(state => state.session.reader);
    const preferences = useSelector(state => state.reader.preferences);

    const [user_name, setUsername] = useState('');
    const [cover_choices, setCoverChoices] = useState('');
    const [genre_choices, setGenreChoices] = useState([]);
    const [author_choices, setAuthorChoices] = useState('');
    const [other_choices, setOtherChoices] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

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
        setGenreChoices(genre_collection);
    };

    const updateAuthorChoices = (e) => {
        setAuthorChoices(e.target.value);
    };

    const updateOtherChoices = (e) => {
        setOtherChoices(e.target.value);
    };

    useEffect(() => {
        dispatch(showPreferences(reader_id))
    }, [dispatch, reader_id])

    useEffect(() => {
        if (preferences) {
            setUsername(preferences.user_name)
            setCoverChoices(preferences.cover_choices)
            setGenreChoices(preferences.genre_choices.split(', '))
            setAuthorChoices(preferences.author_choices)
            setOtherChoices(preferences.other_choices)
        }
    }, [preferences])

    

    const onEditCompletion = async (e) => {
        e.preventDefault();
        const reader_id = reader.id
        const editedPayload = {
            user_name,
            cover_choices,
            genre_choices: genre_choices.join(', '),
            author_choices,
            other_choices,
            reader_id
        }
        await dispatch(updatePreferences(editedPayload))
        history.push(`/readers/${reader_id}/preferences`)
    };

    const onDeletePreferences = async () => {
        const preferencesDeleted = await dispatch(deletePreferences(preferences))
        if (preferencesDeleted) {
            history.push("/reader-quiz")
        }
    }

    // const onDeleteAccount = async () => {
    //     const accountDeleted = await dispatch(deleteAccount(reader))
    //     await dispatch(removePreferences(reader_id))
    //     if (accountDeleted) {
    //         history.push("/sign-up")
    //     }
    // }

    if (!reader) {
        return <Redirect to='/login' />;
    }


    return (
        <div id="update-preferences-container">
            <img className="update-pref-book-flame" src={bookFlame} alt="Book with a flame over it" />
            <form id="update-preferences-form" onSubmit={onEditCompletion}>
                <h3 id="update-preferences-title">Update Preferences</h3>
                <div id="update-preferences-username-div">
                    <label id="update-preferences-username-label">Please choose a username</label>
                    <input id="update-preferences-username-input"
                        type="text"
                        name="user_name"
                        onChange={updateUsername}
                        value={user_name}
                        required={true}
                    ></input>
                </div>
                <div id="update-preferences-cover-div">
                    <label className="update-preferences-cover-label">Please select which cover type you prefer:</label>
                    {['Hardcover', 'Paperback', 'No Preference'].map((choice) => (
                        <>
                            <input className="update-preferences-cover-input"
                                id={choice}
                                type="radio"
                                name="cover_choices"
                                onChange={updateCoverChoices}
                                value={choice}
                                checked={choice === cover_choices}
                                required={true}
                            ></input>
                            <label className="update-preferences-cover-label" htmlFor={choice}>{choice}</label>
                        </>
                    ))}
                </div>
                <div id="update-preferences-genre-div">
                    <label className="update-preferences-genre-label">Please select which genres you enjoy:</label>
                    <div id="update-preferences-genre-block-1">
                        {['Biography', 'Classic Literature', 'Contemporary Literature', 'Crime', 'Fantasy', 'Graphic Novels & Comics', 'LGBTQ+ Fiction', 'Historical Fiction'].map((genre) => (
                        <span>
                            <input className="update-preferences-genre-input"
                                type="checkbox"
                                key={genre}
                                name="genre_choices"
                                onChange={updateGenreChoices}
                                value={genre}
                                checked={genre_choices.includes(genre)}
                            />
                            <label className="update-preferences-genre-label" htmlFor={genre}>{genre}</label>
                        </span>
                    ))}
                    </div>
                    <div id="update-preferences-genre-block-2">
                        {['Horror', 'Humor & Comedy', 'Memoir', 'Mystery', 'Nonfiction', 'Paranormal', 'Philosophical', 'Poetry'].map((genre) => (
                            <span>
                                <input className="update-preferences-genre-input"
                                    type="checkbox"
                                    key={genre}
                                    name="genre_choices"
                                    onChange={updateGenreChoices}
                                    value={genre}
                                    checked={genre_choices.includes(genre)}
                                />
                                <label className="update-preferences-genre-label" htmlFor={genre}>{genre}</label>
                            </span>
                        ))}
                    </div>
                    <div id="update-preferences-genre-block-3">
                        {['Pulp Fiction', 'Romance', 'Science Fiction', 'Speculative Fiction', 'Suspense', 'Thriller', 'Young Adult'].map((genre) => (
                            <span>
                                <input className="update-preferences-genre-input"
                                    type="checkbox"
                                    key={genre}
                                    name="genre_choices"
                                    onChange={updateGenreChoices}
                                    value={genre}
                                    checked={genre_choices.includes(genre)}
                                />
                                <label className="update-preferences-genre-label" htmlFor={genre}>{genre}</label>
                            </span>
                        ))}
                    </div>
                </div>
                <div id="update-preferences-authors-div">
                    <label className="update-preferences-author-label">Please list some authors you like, separated by commas</label>
                    <textarea className="update-preferences-author-input"
                        // type="text"
                        name="author_choices"
                        onChange={updateAuthorChoices}
                        value={author_choices}
                        required={true}
                    />
                </div>
                <div id="update-preferences-notes-div">
                    <label className="update-preferences-notes-label">Please provide any additional information that might help your advisor</label>
                    <textarea className="update-preferences-notes-input"
                        name="other_choices"
                        onChange={updateOtherChoices}
                        value={other_choices}
                        required={true}
                    />
                </div>
                <div id="update-preferences-btns">
                <button id="update-preferences-btn" type="submit">Update my preferences!</button>
                    <button id="delete-preferences-btn" type="button" onClick={onDeletePreferences}>Delete These Preferences</button>
                    <NavLink className="update-cancel-link" to={`/readers/${reader_id}/preferences`} exact={true} activeClassName="active">
                        Cancel
                </NavLink>
                {/* {!(reader.email === 'demo@aa.io') && (
                    <button type="button" onClick={onDeleteAccount}>Delete This Account</button>
                )} */}
                </div>
            </form>
        </div>
    );
};

export default UpdatePreferencesForm;
