import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { showPreferences } from '../store/reader';

const ShowPreferences = () => {
    const dispatch = useDispatch();
    // const { readerId } = useParams()
    const reader = useSelector(state => state.session.reader);
    
    useEffect(() => {
        dispatch(showPreferences(reader.id))
    }, [dispatch, reader.id])

    return (
       <div>
           <h2>Preferences</h2>
           <div>
               {reader.email}
           </div>
       </div>
    );
};

export default ShowPreferences;