import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import './styles/home.css'


const Home = () => {
    return (
        <div id="home-container">
            <div id="home-page-greeting">
                <h1>Discover a new reading <br></br>experience</h1>
            </div>
            <NavLink className="nav-links" to="/sign-up" exact={true} activeClassName="active">
                <button className="home-page-button">Take Your Reading Quiz</button>
            </NavLink>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;