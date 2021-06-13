import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { showReaders } from '../store/advisor';
import './styles/show-orders.css';
import bookSpeak from '../images/book-speak.png';


export default function ShowOrders() {
    const dispatch = useDispatch();
    const reader = useSelector(state => state.session.reader);
    const advisor = useSelector(state => state.session.advisor);
    const readers = useSelector(state => state.advisor.readers)
    
    useEffect(() => {
        dispatch(showReaders(advisor.id))
    }, [dispatch, advisor.id])

    if (!advisor) {
        return <Redirect to='/advisor-login' />;
    }

    return (
        <div id="orders-container">
            <img className="show-order-book-speak" src={bookSpeak} />
            <div id="orders-contents">
                <h3 id="orders-header">My Readers</h3>
            <ul id="show-orders-ul">
                    <div className="orders-list-div">
                {readers.map((reader) => (
                    <li className="preference-list-items">{reader.user_name}</li>
                ))}
                </div>
            </ul>
            </div>
        </div>
    )
}