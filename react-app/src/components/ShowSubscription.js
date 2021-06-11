import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams, NavLink, Redirect } from 'react-router-dom';
import { showSubscription } from '../store/subscription';
import './styles/show-subscription.css';
// import UpdatePreferencesForm from './UpdatePreferencesForm';
import bookBubble from '../images/book-bubble.png';

const ShowPreferences = () => {
    const dispatch = useDispatch();
    const { reader_id } = useParams()
    const reader = useSelector(state => state.session.reader);
    // let authors;
    
    useEffect(() => {
        dispatch(showSubscription(reader_id))
    }, [dispatch, reader_id])
    
    const subscription = useSelector(state => state.subscription);
    // console.log('$$$$$$$$$$ THIS IS A SUBSCRIPTION', subscription[subscription])
    
    // const hiddenPayment = (subscription) => {
    //     return subscription.payment_method.slice(-5)
    // }

    if (!reader) {
        return <Redirect to='/reader-login' />;
    }

    return (
        <div id="subscription-container">
            <img className="show-sub-book-bubble" src={bookBubble} />
            <div id="subscription-contents">
            <h2 id="subscription-header">Subscription</h2>
            {subscription.subscription_type ? (
                <div className="subscription-list-div">
                    <ul>
                            <li className="subscription-list-label dark-purple-sub-container">Subscription Type: {subscription.subscription_type}</li>
                            <li className="subscription-list-label light-purple-sub-container">Payment Method: {subscription.payment_method}</li>
                    </ul>
                    <NavLink to={`/readers/${reader_id}/subscription/update`}>
                            <button id="update-subscription-button" type="button">
                            Update Subscription
                    </button>
                    </NavLink>
                        <NavLink className="show-sub-cancel-link" to={`/readers/${reader_id}/preferences`} exact={true} activeClassName="active">
                            Cancel
                </NavLink>
                </div>
            ) : (
            <div className="subscription-list-div">
                    <h1>Start a new subscription!</h1>
                    <NavLink to={`/readers/${reader_id}/subscription/new`}>
                                <button id="start-subscription-btn" type="button">
                            Start New Subscription
                        </button>
                    </NavLink>
                </div>
            )}
            </div>
        </div>
    );
};

export default ShowPreferences;