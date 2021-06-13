import React from 'react';
import { advisorLogin } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../styles/navbar.css';


export default function DemoAdvisor({onClick}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const onAdvisorLogin = async (e) => {
        e.preventDefault();
        await dispatch(advisorLogin('demo_ad@aa.io', 'password'));
        onClick();
        history.push('/my-readers')
    }

    return <form onSubmit={onAdvisorLogin}>
        <button id="demo-advisor-btn" type="submit">DemoAdvisor</button>
    </form>
}