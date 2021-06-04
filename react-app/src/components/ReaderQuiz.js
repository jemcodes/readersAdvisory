import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { capturePreferences } from '../store/reader';

const ReaderQuiz = () => {
    const [username, setUsername] = useState("");
    const [coverChoices, setCoverChoices] = useState("");
    const [genreChoices, setGenreChoices] = useState([]);
    const [authorChoices, setAuthorChoices] = useState([]);
    const [otherChoices, setOtherChoices] = useState("");
    const reader = useSelector(state => state.session.reader);
    const dispatch = useDispatch();

    const onQuizCompletion = async (e) => {
        e.preventDefault();

        const preferencePayload = {
            username,
            coverChoices,
            genreChoices,
            authorChoices,
            otherChoices
        }
        
        await dispatch(capturePreferences(preferencePayload));
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

    if (reader) {
        return <Redirect to="/reader-quiz" />;
    }

    return (
        <form onSubmit={onQuizCompletion}>
            <div>
                <label>Please choose a username</label>
                <input
                    type="text"
                    name="username"
                    onChange={updateUsername}
                    value={username}
                    required={true}
                ></input>
            </div>
            <div>
                <label>Please select which cover type you prefer</label>
                <input
                    type="select"
                    name="coverChoices"
                    onChange={updateCoverChoices}
                    value={coverChoices}
                    required={true}
                ></input>
            </div>
            <div>
                <label>Please list some genres you like, separated by commas</label>
                <input
                    type="text"
                    name="genreChoices"
                    onChange={updateGenreChoices}
                    value={genreChoices}
                    required={true}
                ></input>
            </div>
            <div>
                <label>Please list some authors you like, separated by commas</label>
                <input
                    type="text"
                    name="authorChoices"
                    onChange={updateAuthorChoices}
                    value={authorChoices}
                    required={true}
                ></input>
            </div>
            <div>
                <label>Please provide any additional information that might help your advisor</label>
                <input
                    type="text"
                    name="otherChoices"
                    onChange={updateOtherChoices}
                    value={otherChoices}
                    required={true}
                ></input>
            </div>
            <button type="submit">Submit my preferences!</button>
        </form>
    );
};

export default ReaderQuiz;
