import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoUser from './auth/DemoUser';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';
import './styles/navbar.css';

const NavBar = () => {
  return (
    <nav id="navbar">
      <div id="nav-container">
            {/* <h1 ></h1> */}
            {/* <div className="nav-link-div"> */}
              <NavLink id="site-title" to="/" exact={true} activeClassName="active">
                Readers' Advisory
              </NavLink>
            {/* </div>   */}
          <div className="dropdown">
            <button className="dropdown-btn">READERS</button>
            <div id="dropdown-contents">
                <NavLink className="nav-links" to="/login" exact={true} activeClassName="active">
                  <button className="navbar-buttons">Login</button>
                </NavLink>
                <NavLink className="nav-links" to="/sign-up" exact={true} activeClassName="active">
                  <button className="navbar-buttons">Sign Up</button>
                </NavLink>
                {/* <LoginForm />
                <SignUpForm /> */}
                <DemoUser />
                <LogoutButton />
            </div>
          </div>
      </div>
    </nav>
  );
}

export default NavBar;
