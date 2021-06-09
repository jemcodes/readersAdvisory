import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { advisorLogin } from "../../store/session";

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
        return <Redirect to="/" />;
    }

    return (
        <form onSubmit={onLogin}>
            <div>
                {errors.map((error) => (
                    <div>{error}</div>
                ))}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={updateEmail}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={updatePassword}
                />
                <button type="submit">Login</button>
                <NavLink to="/" onClick={toggleAdvisorMenu} exact={true} activeClassName="active">
                    Cancel
            </NavLink>
            </div>
        </form>
    );
};

export default AdvisorLoginForm;
