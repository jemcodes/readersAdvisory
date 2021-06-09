import React from 'react';
import { advisorLogin } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function DemoAdvisor() {
    const dispatch = useDispatch();
    const history = useHistory();

    const onAdvisorLogin = async (e) => {
        e.preventDefault();
        await dispatch(advisorLogin('demo_ad@aa.io', 'password'));
        history.push('/advisor-only')
    }

    return <form onSubmit={onAdvisorLogin}>
        <button className="nav-bar-buttons" type="submit">DemoAdvisor</button>
    </form>
}