import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoUser from './auth/DemoUser';
import './styles/navbar.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);



  return (
    <>
      <nav id="nav-bar">
        <div id="nav-container">
              {/* <h1 ></h1> */}
              {/* <div className="nav-link-div"> */}
                <NavLink id="site-title" to="/" exact={true} activeClassName="active">
                  Readers' Advisory
                </NavLink>
                <a href="#" onClick={() => setShowMenu(!showMenu)}>READERS</a>
              {/* </div>   */}
        </div>
      </nav>
        {showMenu && ( 
            <div className="menu-container">
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
            <div className="nav-links-right" style={{backgroundColor: "white"}}>
                <DemoUser />
                <LogoutButton />
            </div>
      </div>
        )}
    </>
  );
}

export default NavBar;
