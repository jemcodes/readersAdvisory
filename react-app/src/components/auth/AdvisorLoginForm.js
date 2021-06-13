import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { advisorLogin } from "../../store/session";
import Footer from '../Footer';
import '../styles/advisor-login-form.css'

const AdvisorLoginForm = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const advisor = useSelector(state => state.session.advisor);
    const dispatch = useDispatch();

    const [showReaderMenu, setShowReaderMenu] = useState(false);
    const [showAdvisorMenu, setShowAdvisorMenu] = useState(false);

    const toggleReaderMenu = () => {
        setShowReaderMenu(!showReaderMenu)
        setShowAdvisorMenu(false)
    }

    const toggleAdvisorMenu = () => {
        setShowAdvisorMenu(!showAdvisorMenu)
        setShowReaderMenu(false)
    }

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(advisorLogin(email, password));
        if (data.errors) {
            setErrors(data.errors);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (advisor) {
        return <Redirect to="/my-readers" />;
    }

    return (
        <div>
            <form onSubmit={onLogin}>
                <div id="advisor-login-container">
                    <div id="advisor-login-email">
                    <label className="input-labels" htmlFor="email">Email</label>
                    <input className="advisor-login-input"
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={updateEmail}
                    />
                        {errors.email && (
                            <small>{errors.email}</small>
                        )}
                    </div>
                <div id="advisor-login-password">
                    <label htmlFor="password">Password</label>
                    <input className="advisor-login-input"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={updatePassword}
                    />
                        {errors.password && (
                            <small>{errors.password}</small>
                        )}
                    <button id="advisor-login-button" type="submit">Login</button>
                    <NavLink className="nav-switch" to="/login" onClick={toggleAdvisorMenu} exact={true} activeClassName="active">
                        Not an advisor? Sign in as a reader!
                </NavLink>
                    </div>
                </div>
            </form>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default AdvisorLoginForm;
