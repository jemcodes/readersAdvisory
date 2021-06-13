import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import Footer from '../Footer';
import '../styles/signup-form.css';

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
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

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const response = await dispatch(signUp(email, password));
      if (response && response.errors) {
        setErrors(response.errors)
      }
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (reader) {
    return <Redirect to="/reader-quiz" />;
  }

  return (
    <div>
      <form onSubmit={onSignUp}>
        <div id="signup-container">
          <div id="signup-email">
            <label className="input-labels">Email</label>
            <input className="signup-input"
              type="text"
              placeholder="Email"
              name="email"
              onChange={updateEmail}
              value={email}
              required={true}
            ></input>
            {errors.email && (
              <small className="error-messages">{errors.email}</small>
            )}
          </div>
        <div id="signup-password">
          <label>Password</label>
          <input className="signup-input"
            type="password"
            placeholder="Password"
            name="password"
            onChange={updatePassword}
            value={password}
              required={true}
          ></input>
            {errors.password && (
              <small className="error-messages">{errors.password}</small>
            )}
        </div>
          <div id="signup-repeat-password">
          <label>Repeat Password</label>
          <input className="signup-input"
            type="password"
            placeholder="Confirm Password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        <button id="signup-button" type="submit">Sign Up</button>
            <NavLink className="nav-switch" to="/login" onClick={toggleReaderMenu} exact={true} activeClassName="active">
              I already have an account
            </NavLink>
        </div>
        </div>
      </form>
      <div id="signup-page-greeting">
        <h1>Discover a new reading <br></br>experience</h1>
      </div>
      <div>
        <Footer />
      </div>
      </div>
  );
};

export default SignUpForm;
