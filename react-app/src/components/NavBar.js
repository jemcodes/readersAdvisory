import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoUser from './auth/DemoUser';
import './styles/navbar.css';

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <div id="nav-container">
            <h1 id="site-title">Reader's Advisory</h1>
            <NavLink className="nav-links" to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
         
            <NavLink className="nav-links" to="/login" exact={true} activeClassName="active">
              Reader Login
            </NavLink>
          
            <NavLink className="nav-links" to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          
            <div>
              <DemoUser />
            </div>
         
            <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;
