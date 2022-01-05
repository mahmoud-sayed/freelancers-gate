import React from "react";
import './../../global/global-style.scss';
import './style.scss';
import freelancer from './../../assets/freelancers.jpg';

const Home = () => {
    return (
        <div className="home-wrapper">
            <img src={freelancer} alt="freelancer girl" />
            <div className="container">
                <h1>Home page </h1>
            </div>

        </div>
    );
}

export default Home;