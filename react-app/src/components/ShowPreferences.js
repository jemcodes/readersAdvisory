import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { showPreferences } from '../store/reader';

const ShowPreferences = () => {
    const dispatch = useDispatch();
    // const { readerId } = useParams()
    const reader = useSelector(state => state.session.reader);
    const preferences = useSelector(state => state.reader.preferences);
    
    useEffect(() => {
        dispatch(showPreferences(reader.id))
    }, [dispatch, reader.id])

    return (
       <div>
           <h2>Preferences</h2>
            {preferences && (
                <div>Username: 
                    {preferences.user_name}
                </div>
            )}
       </div>
    );
};

export default ShowPreferences;