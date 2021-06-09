import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


export default function AdvisorOnly() {
    const advisor = useSelector(state => state.session.advisor);

    if (!advisor) {
        return <Redirect to='/advisor-login' />;
    }

    return (
        <h1>Welcome advisor!!</h1>
    )
}