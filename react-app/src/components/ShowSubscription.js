import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams, NavLink } from 'react-router-dom';
import { showSubscription } from '../store/subscription';
import Footer from '../components/Footer';
// import UpdatePreferencesForm from './UpdatePreferencesForm';

const ShowPreferences = () => {
    const dispatch = useDispatch();
    const { reader_id } = useParams()
    const reader = useSelector(state => state.session.reader);
    let authors;
    
    useEffect(() => {
        dispatch(showSubscription(reader_id))
    }, [dispatch, reader_id])
    
    const subscription = useSelector(state => state.subscription.subscription);
    // console.log('$$$$$$$$$$ THIS IS A SUBSCRIPTION', subscription[subscription])

    return (
        <div>
            <h2>Subscription</h2>
            {subscription && (
                <ul>
                    <li>Subscription Type: {subscription[subscription.subscription]}</li>
                    <li>Payment Method: {subscription[subscription.payment]}</li>
                </ul>
            )}
            <NavLink to={`/readers/${reader_id}/subscription/new`}>
                <button type="button">
                    Start New Subscription
                </button>
            </NavLink>
            <NavLink to={`/readers/${reader_id}/subscription/update`}>
                <button type="button">
                    Update Subscription
                </button>
            </NavLink>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default ShowPreferences;