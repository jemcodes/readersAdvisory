import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import Footer from '../Footer';
import '../styles/signup-form.css';

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const reader = useSelector(state => state.session.reader);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(email, password));
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
            <label>Email</label>
            <input className="signup-input"
              type="text"
              placeholder="Email"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
        <div id="signup-password">
          <label>Password</label>
          <input className="signup-input"
            type="password"
            placeholder="Password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
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
        </div>
        </div>
        <div>
          <Footer />
        </div>
      </form>
      <div id="signup-page-greeting">
        <h1>Discover a new reading <br></br>experience</h1>
      </div>
      </div>
  );
};

export default SignUpForm;
