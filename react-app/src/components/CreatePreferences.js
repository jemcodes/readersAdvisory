import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { capturePreferences } from '../store/reader';
import Footer from './Footer';
import './styles/create-preferences.css';

const CreatePreferences = () => {
    const [user_name, setUsername] = useState("");
    const [cover_choices, setCoverChoices] = useState("");
    const [genre_choices, setGenreChoices] = useState("");
    const [author_choices, setAuthorChoices] = useState("");
    const [other_choices, setOtherChoices] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const reader = useSelector(state => state.session.reader);
    // const reader_id = reader.id
    // const reader = useSelector(state => state.session.reader);
    
    const onQuizCompletion = async (e) => {
        e.preventDefault();
        const reader_id=reader.id
        const preferencePayload = {
            user_name,
            cover_choices,
            genre_choices,
            author_choices,
            other_choices,
            reader_id
        }
        // console.log('&&&&&&&&&&&&&&&&&', reader.id)
        await dispatch(capturePreferences(preferencePayload))
        history.push(`/readers/${reader_id}/preferences`)

    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateCoverChoices = (e) => {
        setCoverChoices(e.target.value);
    };

    const updateGenreChoices = (e) => {
        setGenreChoices(e.target.value);
    };

    const updateAuthorChoices = (e) => {
        setAuthorChoices(e.target.value);
    };

    const updateOtherChoices = (e) => {
        setOtherChoices(e.target.value);
    };

    // if (reader) {
    //     return <Redirect to="/reader-quiz" />;
    // }

    return (
        <div id="create-preferences-container">
            <form id="create-preferences-contents" onSubmit={onQuizCompletion}>
                <h3 id="create-preferences-header">Create Preferences</h3>
                <div className="create-preference-list-div">
                    <label className="create-preference-list-items">Please choose a username</label>
                    <input className="create-preference-inputs"
                        type="text"
                        name="user_name"
                        onChange={updateUsername}
                        value={user_name}
                        required={true}
                    ></input>
                </div>
                <div className="create-preference-list-div">
                    <label className="create-preference-list-items">Please select which cover type you prefer</label>
                    {['Hardcover', 'Paperback', 'No Preference'].map((choice) => (
                        <>
                            <input className="create-preference-inputs"
                                id={choice}
                                type="radio"
                                name="cover_choices"
                                onChange={updateCoverChoices}
                                value={choice}
                                required={true}
                            ></input>
                            <label htmlFor={choice}>{choice}</label>
                        </>
                    ))}
                </div>
                <div className="create-preference-list-div">
                    <label className="create-preference-list-items">Please select which genres you enjoy</label>
                    {['Biography', 'Classic Literature', 'Contemporary Literature', 'Crime', 'Fantasy', 'Graphic Novels & Comics', 'LGBTQ+ Fiction', 'Historical Fiction', 'Horror', 'Humor & Comedy', 'Memoir', 'Mystery', 'Nonfiction', 'Paranormal', 'Philosophical', 'Poetry', 'Pulp Fiction', 'Romance', 'Science Fiction', 'Speculative Fiction', 'Suspense', 'Thriller', 'Young Adult'].map((genre) => (
                       <>
                            <input className="create-preference-text"
                                type="checkbox"
                                name="genre_choices"
                                onChange={updateGenreChoices}
                                value={genre}
                            ></input>
                        <label htmlFor={genre}>{genre}</label>
                        </>
                    ))}
                </div>
                <div className="create-preference-list-div">
                    <label className="create-preference-list-items">Please list some authors you like, separated by commas</label>
                    <textarea className="create-preference-text"
                        // type="text"
                        name="author_choices"
                        onChange={updateAuthorChoices}
                        value={author_choices}
                        placeholder="For example: Ursula K. Le Guin, bell hooks, A.K.R. Scott"
                        required={true}
                    />
                </div>
                <div className="create-preference-list-div">
                    <label className="create-preference-list-items">Please provide any additional information that might help your advisor</label>
                    <textarea className="create-preference-text"
                        type="text"
                        name="other_choices"
                        onChange={updateOtherChoices}
                        value={other_choices}
                        placeholder="For example: I enjoy books that stretch my imagination and teach me something. I have plenty of time to read right now, so I don't mind something heavier if it will really take me on a journey!"
                        required={true}
                    />
                </div>
                <button id="create-preferences-btn" type="submit">Submit my preferences!</button>
                <div>
                    <Footer />
                </div>
            </form>
        </div>
    );
};

export default CreatePreferences;
