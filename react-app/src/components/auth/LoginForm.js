import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { login } from "../../store/session";
import Footer from "../Footer";
import '../styles/login-form.css';


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const reader = useSelector(state => state.session.reader);
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
    const data = await dispatch(login(email, password));
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

  if (reader) {
    return <Redirect to={`/readers/${reader.id}/preferences`} />;
  }

  return (
    <div>
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div id="login-container">
          <div id="login-email">
            <label htmlFor="email"></label>
            <input className="login-input"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div id="login-password">
            <label htmlFor="password"></label>
            <input className="login-input"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <button id="login-button" type="submit">Reader Login</button>
            <NavLink to="/" onClick={toggleReaderMenu} exact={true} activeClassName="active">
              Cancel
            </NavLink>
          </div>
        </div>
      </form>
      <div id="login-page-greeting">
        <h1>Welcome back, <br></br>reader friend!</h1>
      </div>
      <div>
        <Footer />
      </div>
      </div>
  );
};

export default LoginForm;
