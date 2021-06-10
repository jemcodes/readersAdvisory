import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoUser from './auth/DemoUser';
import './styles/navbar.css';
import DemoAdvisor from './auth/DemoAdvisor';

const NavBar = () => {
  const [showReaderMenu, setShowReaderMenu] = useState(false);
  const [showAdvisorMenu, setShowAdvisorMenu] = useState(false);
  const reader = useSelector(state => state.session.reader)
  const advisor = useSelector(state => state.session.advisor)

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
            {reader && 
              <LogoutButton />
            }
            {advisor && 
            <LogoutButton />}
          </div>
              {/* </div>   */}
        </div>
      </nav>
        {showReaderMenu && ( 
            <div className="reader-menu-container">
            <div className="reader-nav-links">
              <h1 id="author-heading">A Few Of Our Authors</h1>
              <div id="author-container">
                  <div id="left-authors">
                      <a target="_blank" rel="noreferrer" href="https://akrscott.com/">A.K.R. Scott</a>
                      <br></br>
                      <a target="_blank" rel="noreferrer" href="https://tamaralush.com/">Tamara Lush</a>
                      <br></br>
                      <a target="_blank" rel="noreferrer" href="https://www.joannemachin.com/">Joanne Machin</a>
                      <br></br>
                      <a target="_blank" rel="noreferrer" href="https://autumnjoneslake.com/">Autumn Jones Lake</a>
                  </div>
                  <div id="right-authors">
                    <a target="_blank" rel="noreferrer" href="https://www.dannikadark.net/">Dannika Dark</a>
                    <br></br>
                    <a target="_blank" rel="noreferrer" href="https://www.aljacksonauthor.com/">A. L. Jackson</a>
                    <br></br>
                    <a target="_blank" rel="noreferrer" href="https://www.cariancolewrites.com/">Carian Cole</a>
                    <br></br>
                    <a target="_blank" rel="noreferrer" href="https://jemartinbooks.com/">J. E. Martin</a>
                  </div>
              <div className="menu-divider"></div>
              </div>
            </div>
          <div className="about-nav-links">
            <h1 id="about-heading">About the Developer</h1>
            <div id="about-container">
              <div id="left-about">
                <a target="_blank" rel="noreferrer" href="https://github.com/jemcodes/">GitHub</a>
              </div>
              <div id="right-about">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jemcodes/">LinkedIn</a>
              </div>
              <div className="menu-divider"></div>
            </div>
          </div>
            <NavLink className="nav-links" to="/sign-up" onClick={toggleReaderMenu} exact={true} activeClassName="active">
              <button className="nav-bar-buttons">Get Started</button>
            </NavLink>
            <NavLink className="nav-links" to="/login" onClick={toggleReaderMenu} exact={true} activeClassName="active">
                  <button className="nav-bar-buttons">Sign In</button>
                </NavLink>
                <DemoUser />
              </div>
        )}
      {showAdvisorMenu && (
        <div className="menu-container">
          <div className="nav-links-right">
            <NavLink className="nav-links" to="/advisor-login" exact={true} activeClassName="active">
              <button className="nav-bar-buttons">Sign In</button>
            </NavLink>
            <DemoAdvisor />
          </div>
          </div>
      )}
    </>
  );
}

export default NavBar;
