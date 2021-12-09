import React from "react";
import { Link } from "react-router-dom";
import './../../global/global-style.scss';
import './style.scss';

const Logo = () => {
    return (
        <Link to="/">
        <div className="logo">
            <img src="https://via.placeholder.com/170x35" alt="freelancers gate logo" />
        </div>
        </Link>
    );
}

export default Logo;