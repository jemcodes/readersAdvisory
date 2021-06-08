import React from 'react';
import { login } from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';


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
            <button className="navbar-buttons" type="submit">DemoUser</button>
        </form>
    );
}