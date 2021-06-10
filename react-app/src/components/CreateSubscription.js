import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory, NavLink, Redirect } from 'react-router-dom';
import { captureSubscription } from '../store/subscription';
import './styles/create-subscription.css';

const CreateSubscription = () => {
    const [subscription_type, setSubscriptionType] = useState("");
    const [payment_method, setPaymentMethod] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const reader = useSelector(state => state.session.reader);
    const reader_id = reader.id
    // const reader_id = reader.id
    // const reader = useSelector(state => state.session.reader);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reader_id = reader.id
        const subscriptionPayload = {
            subscription_type,
            payment_method,
            reader_id
        }
        await dispatch(captureSubscription(subscriptionPayload))
        window.alert("Great! Your advisor will start working on your next box when it's time!")
        history.push(`/readers/${reader_id}/subscription`)
    };

    const updateSubscriptionType = (e) => {
        setSubscriptionType(e.target.value);
    };

    const updatePayment = (e) => {
        setPaymentMethod(e.target.value);
    };

    if (!reader) {
        return <Redirect to='/reader-login' />;
    }

    return (
        <div id="create-subscription-container">
            <form id="create-subscription-contents" onSubmit={handleSubmit}>
                <h3 id="create-subscription-header">Build Your Subscription</h3>
                <div className="create-subscription-div">
                    <label className="create-subscription-items">Please enter a subscription type</label>
                        <select className="create-subscription-inputs"
                            type="text"
                            name="subscription"
                            onChange={updateSubscriptionType}
                            value={subscription_type}
                        >
                            {['---Subscription Options---', 'Quarterly', 'Monthly', 'Weekly'].map((choice) => (
                                <option value={choice}>{choice}</option>
                            ))}
                        </select>
                </div>
                <div className="create-subscription-div">
                    <label className="create-subscription-items">Please enter a payment method</label>
                    <h2>Surprise! You've got trial credit!</h2>
                    <h3>Use read-good-books-now as your payment method to use your credit now!</h3>
                    <input className="create-subscription-inputs"
                        type="password"
                        name="payment"
                        onChange={updatePayment}
                        value={payment_method}
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        // required={true}
                    ></input>
                </div>
                <button id="create-subscription-btn" type="submit">Start my subscription!</button>
                <NavLink to={`/readers/${reader_id}/preferences`} exact={true} activeClassName="active">
                    Cancel
                </NavLink>
            </form>
        </div>
    );
};

export default CreateSubscription;
