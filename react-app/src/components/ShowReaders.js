import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { showReaders } from '../store/advisor';
import './styles/show-readers.css';
import bookSpeak from '../images/book-speak.png';


export default function ShowReaders() {
    const dispatch = useDispatch();
    // const reader = useSelector(state => state.session.reader);
    const advisor = useSelector(state => state.session.advisor);
    const readers = useSelector(state => state.advisor.readers)
    
    useEffect(() => {
        dispatch(showReaders(advisor.id))
    }, [dispatch, advisor.id])

    if (!advisor) {
        return <Redirect to='/advisor-login' />;
    }

    return (
        <div id="readers-container">
            <img className="show-reader-book-speak" src={bookSpeak} alt="Book as a text balloon" />
            <div id="readers-contents">
                <h3 id="readers-header">My Advisees</h3>
            <ul id="show-readers-ul">
                    <div className="readers-list-div">
                {readers.map((reader) => (
                    <li className="readers-list-items">{reader.user_name}</li>
                ))}
                </div>
            </ul>
            </div>
        </div>
    )
}