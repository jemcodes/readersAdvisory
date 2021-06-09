import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/home.css'


const Home = () => {
    return (
        <div>
            <div id="home-page-greeting">
                <h1>Discover a new reading <br></br>experience</h1>
            </div>
            <NavLink className="nav-links" to="/sign-up" exact={true} activeClassName="active">
                <button className="home-page-button">Get Started</button>
            </NavLink>
        </div>
    )
}

export default Home;