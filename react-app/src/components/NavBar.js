import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoUser from './auth/DemoUser';
import DemoAdvisor from './auth/DemoAdvisor';
import './styles/navbar.css';
import bookBubble from '../images/book-bubble.png';

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
                  {/* <div className="menu-divider"><h1></h1></div> */}
              </div>
            </div>
          <div className="about-nav-links">
            <h1 id="about-heading">About The Developer</h1>
            <div id="about-container">
              <div id="left-about">
                <h2 className="about-titles">Hiya! I'm jane 👋 Find me here 👇</h2>
                <a target="_blank" rel="noreferrer" href="https://github.com/jemcodes/">GitHub</a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jemcodes/">LinkedIn</a>
                <br></br>
                {/* <p>🍸 cheers & happy reading! 📚</p> */}
              </div>
              {/* <div className="menu-divider"><h1></h1></div> */}
            </div>
          </div>
          <div className="su-nav-links">
            <h1 id="reader-su-heading">New Around Here?</h1>
            <div id="reader-su-container">
              <div id="reader-su-btn">
                <NavLink className="nav-links" to="/sign-up" onClick={toggleReaderMenu} exact={true} activeClassName="active">
                  <button className="reader-signup-button">Get Started</button>
                </NavLink>
              </div>
              {/* <div className="menu-divider"><h1></h1></div> */}
            </div>
          </div>
          <div className="li-nav-links">
            <h1 id="reader-li-heading">Readers' Advisory Membership</h1>
            <div id="reader-li-container">
              <div id="reader-li-btn">
            <NavLink className="nav-links" to="/login" onClick={toggleReaderMenu} exact={true} activeClassName="active">
                  <button className="nav-bar-buttons">Sign In</button>
                </NavLink>
                <DemoUser />
              </div>
            </div>
              </div>
          </div>
        )}
      {showAdvisorMenu && (
        <div className="advisor-menu-container">
          <div id="advisor-info-block">
            <img className="advisor-book-bubble" src={bookBubble} />
            {/* <h1 id="ra-heading">Readers' Advisory</h1> */}
            <h2 id="ra-definition-heading">read·ers' ad·​vi·​so·​ry (noun)</h2>
            <p id="ra-definition">Readers’ advisory is the process of matching readers with books and books to readers.</p>
          </div>
          <div className="advisor-nav-links">
          <h1 id="reader-li-heading">Welcome, Trusted Readers' Advisor!</h1>
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
