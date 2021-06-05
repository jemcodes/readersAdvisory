import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { showPreferences } from '../store/reader';

const ShowPreferences = () => {
    const dispatch = useDispatch();
    const { reader_id } = useParams()
    const reader = useSelector(state => state.session.reader);
    const preferences = useSelector(state => state.reader.preferences);
    let authors;
    
    useEffect(() => {
        dispatch(showPreferences(reader_id))
    }, [dispatch, reader_id])

    return (
       <div>
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
    );
};

export default ShowPreferences;