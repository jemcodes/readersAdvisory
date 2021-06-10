import React from 'react';
import { login } from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import '../styles/navbar.css';


export default function DemoUser() {
    const reader = useSelector(state => state.session.reader);
    const dispatch = useDispatch();
    const history = useHistory()

    const onLogin = async (e) => {
        e.preventDefault();
        await dispatch(login("demo@aa.io", "password"));
        history.push("/login")
    }

    return (
        <form onSubmit={onLogin}>
            <button id="demo-reader-btn" type="submit">DemoReader</button>
        </form>
    );
}