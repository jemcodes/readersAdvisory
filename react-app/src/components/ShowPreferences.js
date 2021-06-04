import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { showPreferences } from '../store/reader';
import './styles/show-preferences.css';

const ShowPreferences = () => {
    const dispatch = useDispatch();
    // const { readerId } = useParams()
    const reader = useSelector(state => state.session.reader);
    const preferences = useSelector(state => state.reader.preferences);
    // let authors;
    
    useEffect(() => {
        dispatch(showPreferences(reader.id))
    }, [dispatch, reader.id])

    return (
       <div id="preferences-container">
           <div id="preferences-contents">
            <h2>Preferences</h2>
                {preferences && (
                    <ul>
                        <li>Username: {preferences.user_name}</li>
                        <li>Cover Preference: {preferences.cover_choices}</li>
                        <li>Genres: {preferences.genre_choices.split(', ').map(choice => (<p>{choice}</p>))}</li>
                        <li>Authors: {preferences.author_choices.split(', ').map(choice => (<p>{choice}</p>))}</li>
                        <li>Notes: {preferences.other_choices}</li>
                    </ul>
                )}
            </div>
       </div>
    );
};

export default ShowPreferences;