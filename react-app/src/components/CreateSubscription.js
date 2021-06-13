import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory, NavLink, Redirect } from 'react-router-dom';
import { captureSubscription } from '../store/subscription';
import './styles/create-subscription.css';
import bookMagic from '../images/book-magic.png';

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
        history.push(`/readers/${reader_id}/subscription`)
    };

    const updateSubscriptionType = (e) => {
        setSubscriptionType(e.target.value);
    };

    const updatePayment = (e) => {
        setPaymentMethod(e.target.value);
    };

    if (!reader) {
        return <Redirect to='/login' />;
    }

    return (
        <div id="create-subscription-container">
            <img className="create-sub-book-magic" src={bookMagic} />
            <form id="create-subscription-form" onSubmit={handleSubmit}>
                <h3 id="create-subscription-title">Build Your Subscription</h3>
                <div className="create-subscription-div">
                    <label className="create-subscription-label">Please enter a subscription type</label>
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
                    <h2 className="create-subscription-credit">Surprise! You've got trial credit!
                    <br></br>
                    Use read-good-books-now as your payment method to use your credit now!</h2>
                    <label className="create-subscription-label">Please enter a payment method</label>
                    <input className="create-subscription-inputs"
                        type="password"
                        name="payment"
                        onChange={updatePayment}
                        value={payment_method}
                        placeholder="xxxx-xxxx-xxxxx-xxx"
                        // required={true}
                    ></input>
                </div>
                <button id="create-subscription-btn" type="submit">Start my subscription!</button>
                <NavLink className="create-sub-cancel-link" to={`/readers/${reader_id}/preferences`} exact={true} activeClassName="active">
                    Cancel
                </NavLink>
            </form>
        </div>
    );
};

export default CreateSubscription;
