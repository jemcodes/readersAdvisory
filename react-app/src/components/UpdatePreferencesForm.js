import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { showPreferences, updatePreferences, deletePreferences, deleteAccount } from '../store/reader';

const UpdatePreferencesForm = () => {
    const { reader_id } = useParams();

    const reader = useSelector(state => state.session.reader);
    const preferences = useSelector(state => state.reader.preferences);

    const [user_name, setUsername] = useState('');
    const [cover_choices, setCoverChoices] = useState('');
    const [genre_choices, setGenreChoices] = useState('');
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
        setGenreChoices(e.target.value);
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
            setGenreChoices(preferences.genre_choices)
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
            genre_choices,
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
    //     if (accountDeleted) {
    //         history.push("/sign-up")
    //     }
    // }

    return (
        <form onSubmit={onEditCompletion}>
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
                    type="text"
                    name="cover_choices"
                    onChange={updateCoverChoices}
                    value={cover_choices}
                    required={true}
                ></input>
            </div>
            <div>
                <label>Please list some genres you like, separated by commas</label>
                <textarea
                    // type="text"
                    name="genre_choices"
                    onChange={updateGenreChoices}
                    value={genre_choices}
                    required={true}
                />
            </div>
            <div>
                <label>Please list some authors you like, separated by commas</label>
                <textarea
                    // type="text"
                    name="author_choices"
                    onChange={updateAuthorChoices}
                    value={author_choices}
                    required={true}
                />
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
            <button type="submit">Update my preferences!</button>
            <button type="button" onClick={onDeletePreferences}>Delete These Preferences</button>
            {/* <button type="button" onClick={onDeleteAccount}>Delete This Account</button> */}
        </form>
    );
};

export default UpdatePreferencesForm;
