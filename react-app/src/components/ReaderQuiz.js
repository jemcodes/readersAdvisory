import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

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
        return <Redirect to="/preferences" />;
    }

    return (
        <form onSubmit={onQuizCompletion}>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={updateEmail}
                    value={email}
                ></input>
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={updatePassword}
                    value={password}
                ></input>
            </div>
            <div>
                <label>Repeat Password</label>
                <input
                    type="password"
                    name="repeat_password"
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                ></input>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default ReaderQuiz;
