import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { showPreferences, removePreferences } from '../store/reader';
import { deleteAccount } from '../store/session';
import ShowSubscription from './ShowSubscription';
import './styles/show-preferences.css';
// import UpdatePreferencesForm from './UpdatePreferencesForm';
import bookBubble from '../images/book-bubble.png';

const ShowPreferences = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const reader = useSelector(state => state.session.reader);
    const preferences = useSelector(state => state.reader.preferences);
    // let authors;
    const reader_id = reader.id
    console.log('THIS IS THE READER ID', reader_id)
    
    useEffect(() => {
        dispatch(showPreferences(reader_id))
    }, [dispatch, reader_id])

    const onDeleteAccount = async () => {
        const accountDeleted = await dispatch(deleteAccount(reader))
        await dispatch(removePreferences(reader_id))
        if (accountDeleted) {
            history.push("/sign-up")
        }
    }

    if (!reader) {
        return <Redirect to='/login' />;
    }

    return (
        <>
        <div id="preferences-container">
            <img className="show-pref-book-bubble" src={bookBubble} />
            <div id="preferences-contents">
                <h3 id="preferences-header">Reader Preferences</h3>
                    {preferences && (
                        <ul id="show-pref-ul">
                            <div className="preference-list-div">
                                <li className="preference-list-items dark-purple-container">Username: <p className="preference-list-contents">{preferences.user_name}</p></li>
                            </div>
                            <div className="preference-list-div">
                                <li className="preference-list-items light-purple-container">Cover Preference: <p className="preference-list-contents">{preferences.cover_choices}</p></li>
                            </div>
                            <div className="preference-list-div">
                                <li className="preference-list-items dark-purple-container">Genres: {preferences.genre_choices.split(', ').map(choice => (<p className="preference-list-contents">{choice}</p>))}</li>
                            </div>
                            <div className="preference-list-div">
                                <li className="preference-list-items light-purple-container">Authors: {preferences.author_choices.split(', ').map(choice => (<p className="preference-list-contents">{choice}</p>))}</li>
                            </div>
                            <div className="preference-list-div">
                                <li className="preference-list-items dark-purple-container">Notes: <p className="preference-list-contents">{preferences.other_choices}</p></li>
                            </div>
                        </ul>
                    )}
                    <div id="show-preferences-btns">
                        <NavLink to={`/readers/${reader_id}/preferences/update`}>
                            <button id="show-preferences-update-btn" type="button">
                                Edit My Preferences
                            </button>
                        </NavLink>
                        <NavLink to={`/readers/${reader_id}/subscription`}>
                            <button id="show-preferences-subscription-btn" type="button">
                                View My Subscription
                            </button>
                        </NavLink>
                        {/* <ShowSubscription /> */}
                        {!(reader.email === 'demo@aa.io') && (
                            <button id="delete-account-btn" type="button" onClick={onDeleteAccount}>Delete This Account</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowPreferences;