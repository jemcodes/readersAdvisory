import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoUser from './auth/DemoUser';
import './styles/navbar.css';

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <div id="nav-container">
            {/* <h1 ></h1> */}
            {/* <div className="nav-link-div"> */}
              <NavLink id="site-title" to="/" exact={true} activeClassName="active">
                Readers' Advisory
              </NavLink>
            {/* </div>   */}
          <div className="nav-links-right">
              <NavLink className="nav-links" to="/login" exact={true} activeClassName="active">
                <button className="nav-bar-buttons">Login</button>
              </NavLink>
            </div>  
            <div className="nav-links-right">
              <NavLink className="nav-links" to="/sign-up" exact={true} activeClassName="active">
                <button className="nav-bar-buttons">Sign Up</button>
              </NavLink>
            </div>
          <div className="nav-links-right">
              <DemoUser />
              <LogoutButton />
          </div>
      </div>
    </nav>
  );
}

export default NavBar;
