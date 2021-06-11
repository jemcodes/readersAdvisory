import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { NavLink, useHistory, useParams, Redirect } from 'react-router-dom';
import { showSubscription, updateSubscription, deleteSubscription } from '../store/subscription';
import './styles/update-subscription.css';
import bookBubble from '../images/book-bubble.png';

const UpdateSubscriptionForm = () => {
    const { reader_id } = useParams();

    const reader = useSelector(state => state.session.reader);
    const subscription = useSelector(state => state.subscription);

    const [subscription_type, setSubscriptionType] = useState('');
    const [payment_method, setPaymentMethod] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const updateSubscriptionType = (e) => {
        setSubscriptionType(e.target.value);
    };

    const updatePayment = (e) => {
        setPaymentMethod(e.target.value);
    };

    useEffect(() => {
        dispatch(showSubscription(reader_id))
    }, [dispatch, reader_id])

    useEffect(() => {
        if (subscription) {
            setSubscriptionType(subscription.subscription_type)
            setPaymentMethod(subscription.payment_method)
        }
    }, [subscription])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const reader_id = reader.id
        const editedSubscription = {
            subscription_type,
            payment_method,
            reader_id
        }
        await dispatch(updateSubscription(editedSubscription))
        window.alert("Great! Your advisor will start working on your next box when it's time!")
        history.push(`/readers/${reader_id}/subscription`)
    };

    const onDelete = async () => {
        const subscriptionDeleted = await dispatch(deleteSubscription(subscription))
        if (subscriptionDeleted) {
            history.push(`/readers/${reader_id}/preferences`)
        }
    }

    if (!reader) {
        return <Redirect to='/reader-login' />;
    }

    return (
        <div id="update-subscription-container">
            <img className="update-sub-book-bubble" src={bookBubble} />
            <form id="update-subscription-contents" onSubmit={handleSubmit}>
                <h3 id="update-subscription-header">Update Your Subscription</h3>
                <div className="update-subscription-div">
                    <label className="update-subscription-items">Please update your subscription type</label>
                    <>
                        <select className="update-subscription-inputs"
                            type="text"
                            name="subscription"
                            onChange={updateSubscriptionType}
                            value={subscription_type}
                        >
                            {['---Subscription Options---', 'Quarterly', 'Monthly', 'Weekly'].map((choice) => (
                                <option value={choice}>{choice}</option>
                            ))}
                        </select>
                    </>
                </div>
                <div className="update-subscription-div">
                    <label className="update-subscription-items">Please update your payment method</label>
                    <h2>Surprise! You've got trial credit!</h2>
                    <h3>Use read-good-books-now as your payment method to use your credit now!</h3>
                    <input className="update-subscription-inputs"
                        type="password"
                        name="payment"
                        onChange={updatePayment}
                        value={payment_method}
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        // required={true}
                    ></input>
                </div>
                <div>
                    <button id="update-subscription-btn" type="submit">Update my subscription!</button>
                </div>
                <button id="delete-subscription-btn" type="button" onClick={onDelete}>Delete This Subscription</button>
                <NavLink to={`/readers/${reader_id}/preferences`} exact={true} activeClassName="active">
                    Cancel
                </NavLink>
            </form>
        </div>
    );
};

export default UpdateSubscriptionForm;
