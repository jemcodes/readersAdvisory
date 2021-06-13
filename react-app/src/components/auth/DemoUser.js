import React from 'react';
import { login } from "../../store/session";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../styles/navbar.css';


export default function DemoUser({onClick}) {
    const dispatch = useDispatch();
    const history = useHistory();
    

    const onLogin = async (e) => {
        e.preventDefault();
        await dispatch(login("demo@aa.io", "password"));
        onClick();
        history.push("/login")
    }

    return (
        <form onSubmit={onLogin}>
            <button id="demo-reader-btn" type="submit">DemoReader</button>
        </form>
    );
}