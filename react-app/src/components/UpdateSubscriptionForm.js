import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { showSubscription, updateSubscription, deleteSubscription } from '../store/subscription';

const UpdateSubscriptionForm = () => {
    const { reader_id } = useParams();

    const reader = useSelector(state => state.session.reader);
    const reader_subscription = useSelector(state => state.subscription);

    const [subscription, setSubscription] = useState('');
    const [payment, setPayment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const updateSubscriptionType = (e) => {
        setSubscription(e.target.value);
    };

    const updatePayment = (e) => {
        setPayment(e.target.value);
    };

    useEffect(() => {
        dispatch(showSubscription(reader_id))
    }, [dispatch, reader_id])

    useEffect(() => {
        if (subscription) {
            setSubscription(subscription.subscription)
            setPayment(subscription.payment)
        }
    }, [subscription])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const reader_id = reader.id
        const editedSubscription = {
            subscription,
            payment,
            reader_id
        }
        await dispatch(updateSubscription(editedSubscription))
        history.push(`/readers/${reader_id}/subscription`)
    };

    const onDelete = async () => {
        const subscriptionDeleted = await dispatch(deleteSubscription(subscription))
        if (subscriptionDeleted) {
            history.push(`/readers/${reader_id}/preferences`)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Please update your subscription type</label>
                <input
                    type="text"
                    name="subscription"
                    onChange={updateSubscriptionType}
                    value={subscription}
                     // required={true}
                ></input>
            </div>
            <div>
                <label>Please update your payment method</label>
                <input
                    type="text"
                    name="payment"
                    onChange={updatePayment}
                    value={payment}
                    // required={true}
                ></input>
            </div>
            <div>
                <button type="submit">Update my subscription!</button>
            </div>
            <button type="button" onClick={onDelete}>Delete This Subscription</button>
        </form>
    );
};

export default UpdateSubscriptionForm;
