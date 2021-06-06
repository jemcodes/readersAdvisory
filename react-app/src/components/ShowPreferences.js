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
            </div>
       </div>
    );
};

export default ShowPreferences;