import React from "react";
import './../../../global/global-style.scss';
import './style.scss';
import { Link } from 'react-router-dom';

const MainNavItems = () => {
    return (
        <div className="nav-items">
            <ul>
                <li><Link to="/howitworks">how it works</Link></li>
                <li><Link to="/jobs">browes jobs</Link></li>
            </ul>
        </div>

    );
}

export default MainNavItems;