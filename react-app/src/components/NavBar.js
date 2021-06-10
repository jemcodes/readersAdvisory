import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoUser from './auth/DemoUser';
import './styles/navbar.css';
import DemoAdvisor from './auth/DemoAdvisor';

const NavBar = () => {
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

  return (
    <>
      <nav id="nav-bar">
        <div id="nav-container">
              {/* <h1 ></h1> */}
              {/* <div className="nav-link-div"> */}
                <NavLink id="site-title" to="/" exact={true} activeClassName="active">
                  Readers' Advisory
                </NavLink>
          <div className="menu-links-div">
            <a href="#" className="menu-links" onClick={toggleReaderMenu}>READERS</a>
            <a href="#" className="menu-links" onClick={toggleAdvisorMenu}>ADVISORS</a>
          </div>
              {/* </div>   */}
        </div>
      </nav>
        {showReaderMenu && ( 
            <div className="menu-container">
            <div className="nav-links-right">
            <NavLink className="nav-links" to="/sign-up" onClick={toggleReaderMenu} exact={true} activeClassName="active">
              <button className="nav-bar-buttons">Get Started</button>
            </NavLink>
            <NavLink className="nav-links" to="/login" onClick={toggleReaderMenu} exact={true} activeClassName="active">
                  <button className="nav-bar-buttons">Sign In</button>
                </NavLink>
                <DemoUser />
                <LogoutButton />
              </div>  
      </div>
        )}
      {showAdvisorMenu && (
        <div className="menu-container">
          <div className="nav-links-right">
            <NavLink className="nav-links" to="/advisor-login" exact={true} activeClassName="active">
              <button className="nav-bar-buttons">Sign In</button>
            </NavLink>
            <DemoAdvisor />
            <LogoutButton />
          </div>
          </div>
      )}
    </>
  );
}

export default NavBar;
