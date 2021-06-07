import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';
import { captureSubscription } from '../store/subscription';

const CreateSubscription = () => {
    const [subscription, setSubscription] = useState("");
    const [payment, setPayment] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const reader = useSelector(state => state.session.reader);
    // const reader_id = reader.id
    // const reader = useSelector(state => state.session.reader);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reader_id = reader.id
        const subscriptionPayload = {
            subscription,
            payment,
            reader_id
        }
        await dispatch(captureSubscription(subscriptionPayload))
        history.push(`/readers/${reader_id}/subscription`)

    };

    const updateSubscriptionType = (e) => {
        setSubscription(e.target.value);
    };

    const updatePayment = (e) => {
        setPayment(e.target.value);
    };

    // if (reader) {
    //     return <Redirect to="/reader-quiz" />;
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Please enter a subscription type</label>
                <input
                    type="text"
                    name="subscription"
                    onChange={updateSubscriptionType}
                    value={subscription}
                     // required={true}
                ></input>
            </div>
            <div>
               <label>Please enter a payment method</label>
                <input
                    type="text"
                    name="payment"
                    onChange={updatePayment}
                    value={payment}
                    // required={true}
                ></input>
            </div>
            <button type="submit">Start my subscription!</button>
        </form>
    );
};

export default CreateSubscription;
