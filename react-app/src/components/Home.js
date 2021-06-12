import React from 'react';
import { NavLink } from 'react-router-dom';
// import NavBar from './NavBar';
import Footer from './Footer';
// import reading from '../images/reading.mp4';
import './styles/home.css'


const Home = () => {
    return (
        <div id="home-container">
            {/* <NavBar /> */}
            {/* <video id="video" loop="true" autoPlay="autoplay" muted>
                <source src={reading} type="video/mp4"></source>
            </video> */}
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