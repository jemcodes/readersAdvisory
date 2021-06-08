import React from "react";
import Footer from './Footer';
import './styles/home.css';

const Home = () => {
    return (
        <div>
            <h1 id="home-page-greeting">Discover a new reading <br></br>experience</h1>
            <div id="home-footer">
                <Footer />
            </div>
        </div>
    );
};

export default Home;