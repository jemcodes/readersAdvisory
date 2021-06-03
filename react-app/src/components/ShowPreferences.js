import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { showPreferences } from '../../store/reader';

const ShowPreferences = () => {
    // const [username, setUsername] = useState("");
    // const [coverChoices, setCoverChoices] = useState("");
    // const [genreChoices, setGenreChoices] = useState([]);
    // const [authorChoices, setAuthorChoices] = useState([]);
    // const [otherChoices, setOtherChoices] = useState("");
    const dispatch = useDispatch();
    const { readerId } = useParams()
    const reader = useSelector(state => state.session.reader);
    
    useEffect(() => {
        dispatch(showPreferences(readerId))
    }, [dispatch, readerId])

    return (
       <div>
           <h2>Preferences</h2>
           <div>
                <p>{reader.reader_profile}</p>
           </div>
       </div>
    );
};

export default ShowPreferences;