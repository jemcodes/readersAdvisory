import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect, useParams, NavLink } from 'react-router-dom';
import { showPreferences } from '../store/reader';
import './styles/show-preferences.css';
// import UpdatePreferencesForm from './UpdatePreferencesForm';

const ShowPreferences = () => {
    const dispatch = useDispatch();
    const { reader_id } = useParams()
    const reader = useSelector(state => state.session.reader);
    const preferences = useSelector(state => state.reader.preferences);
    // let authors;
    
    useEffect(() => {
        dispatch(showPreferences(reader_id))
    }, [dispatch, reader_id])

    if (!reader) {
        return <Redirect to='/reader-login' />;
    }

    return (
        <>
        <div id="preferences-container">
            <div id="preferences-contents">
                <h3 id="preferences-header">Reader Preferences</h3>
                    {preferences && (
                        <ul>
                            <div className="preference-list-div">
                                <li className="preference-list-items">Username: <p className="preference-list-contents">{preferences.user_name}</p></li>
                            </div>
                            <div className="preference-list-div">
                                <li className="preference-list-items">Cover Preference: <p className="preference-list-contents">{preferences.cover_choices}</p></li>
                            </div>
                            <div>
                                <li className="preference-list-items">Genres: {preferences.genre_choices.split(', ').map(choice => (<p className="preference-list-contents">{choice}</p>))}</li>
                            </div>
                            <div>
                                <li className="preference-list-items">Authors: {preferences.author_choices.split(', ').map(choice => (<p className="preference-list-contents">{choice}</p>))}</li>
                            </div>
                            <div>
                                <li className="preference-list-items">Notes: <p className="preference-list-contents">{preferences.other_choices}</p></li>
                            </div>
                        </ul>
                    )}
                    <div id="show-preferences-btns">
                        <NavLink to={`/readers/${reader_id}/preferences/update`}>
                            <button id="show-preferences-update-btn" type="button">
                                Edit Preferences
                            </button>
                        </NavLink>
                        <NavLink to={`/readers/${reader_id}/subscription`}>
                            <button id="show-preferences-subscription-btn" type="button">
                                View My Subscription
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowPreferences;