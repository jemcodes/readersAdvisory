import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { capturePreferences } from '../store/reader';

const ReaderQuiz = () => {
    const [user_name, setUsername] = useState("");
    const [cover_choices, setCoverChoices] = useState("");
    const [genre_choices, setGenreChoices] = useState([]);
    const [author_choices, setAuthorChoices] = useState([]);
    const [other_choices, setOtherChoices] = useState("");
    const reader = useSelector(state => state.session.reader);
    const dispatch = useDispatch();

    const onQuizCompletion = async (e) => {
        e.preventDefault();

        const preferencePayload = {
            user_name,
            cover_choices,
            genre_choices,
            author_choices,
            other_choices
        }

        await dispatch(capturePreferences(preferencePayload))
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
        <form onSubmit={onQuizCompletion}>
            <div>
                <label>Please choose a username</label>
                <input
                    type="text"
                    name="user_name"
                    onChange={updateUsername}
                    value={user_name}
                    required={true}
                ></input>
            </div>
            <div>
                <label>Please select which cover type you prefer</label>
                <input
                    type="select"
                    name="cover_choices"
                    onChange={updateCoverChoices}
                    value={cover_choices}
                    required={true}
                ></input>
            </div>
            <div>
                <label>Please list some genres you like, separated by commas</label>
                <input
                    type="text"
                    name="genre_choices"
                    onChange={updateGenreChoices}
                    value={genre_choices}
                    required={true}
                ></input>
            </div>
            <div>
                <label>Please list some authors you like, separated by commas</label>
                <input
                    type="text"
                    name="author_choices"
                    onChange={updateAuthorChoices}
                    value={author_choices}
                    required={true}
                ></input>
            </div>
            <div>
                <label>Please provide any additional information that might help your advisor</label>
                <input
                    type="text"
                    name="other_choices"
                    onChange={updateOtherChoices}
                    value={other_choices}
                    required={true}
                ></input>
            </div>
            <button type="submit">Submit my preferences!</button>
        </form>
    );
};

export default ReaderQuiz;
