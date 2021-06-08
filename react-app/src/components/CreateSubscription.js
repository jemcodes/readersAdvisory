import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';
import { captureSubscription } from '../store/subscription';
import './styles/create-subscription.css';

const CreateSubscription = () => {
    const [subscription_type, setSubscriptionType] = useState("");
    const [payment_method, setPaymentMethod] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const reader = useSelector(state => state.session.reader);
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
        console.log(subscriptionPayload)
        await dispatch(captureSubscription(subscriptionPayload))
        history.push(`/readers/${reader_id}/subscription`)

    };

    const updateSubscriptionType = (e) => {
        setSubscriptionType(e.target.value);
    };

    const updatePayment = (e) => {
        setPaymentMethod(e.target.value);
    };

    // if (reader) {
    //     return <Redirect to="/reader-quiz" />;
    // }

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
            </form>
        </div>
    );
};

export default CreateSubscription;
