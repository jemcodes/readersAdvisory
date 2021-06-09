import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { showOrders } from '../store/advisor';


export default function ShowOrders() {
    const dispatch = useDispatch();
    const advisor = useSelector(state => state.session.advisor);
    
    useEffect(() => {
        dispatch(showOrders(advisor.id))
    }, [dispatch, advisor.id])

    if (!advisor) {
        return <Redirect to='/advisor-login' />;
    }

    return (
        <h1>Welcome advisor!!</h1>
    )
}