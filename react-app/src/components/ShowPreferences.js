import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { showPreferences } from '../store/reader';

const ShowPreferences = () => {
    const dispatch = useDispatch();
    // const { readerId } = useParams()
    const reader = useSelector(state => state.session.reader);
    const preferences = useSelector(state => state.reader.preferences);
    let authors;
    
    useEffect(() => {
        dispatch(showPreferences(reader.id))
    }, [dispatch, reader.id])

    return (
       <div>
           <h2>Preferences</h2>
            {preferences && (
                <ul>
                    <li>Username: {preferences.user_name}</li>
                    <li>Cover Preference: {preferences.cover_choices}</li>
                    <li>Genres: {preferences.genre_choices.join(', ')}</li>
                    <li>Authors: {preferences.author_choices.join(', ')}</li>
                    <li>Notes: {preferences.other_choices}</li>
                </ul>
            )}
       </div>
    );
};

export default ShowPreferences;