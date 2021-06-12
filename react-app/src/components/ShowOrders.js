import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { showOrders } from '../store/advisor';
import './styles/show-orders.css';
import bookBubble from '../images/book-bubble.png';


export default function ShowOrders() {
    const dispatch = useDispatch();
    const reader = useSelector(state => state.session.reader);
    const advisor = useSelector(state => state.session.advisor);
    const orders = useSelector(state => state.advisor.orders)
    
    useEffect(() => {
        dispatch(showOrders(advisor.id))
    }, [dispatch, advisor.id])

    if (!advisor) {
        return <Redirect to='/advisor-login' />;
    }

    return (
        <div id="orders-container">
            <img className="show-order-book-bubble" src={bookBubble} />
            <div id="orders-contents">
                <h3 id="orders-header">Reader Preferences</h3>
            <ul id="show-orders-ul">
                    <div className="orders-list-div">
                {orders.map((order) => (
                    <li className="preference-list-items">Authors: {order.author_options}</li>
                ))}
                </div>
            </ul>
            </div>
        </div>
    )
}