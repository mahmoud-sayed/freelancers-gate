import React, { Fragment } from "react";
import './../../../global/global-style.scss';
import './style.scss';
import Logo from '../../logo';
import { Link } from 'react-router-dom';
import MainNavItems from "../mainNavItems";


const MainNavbar = () => {
    return (
        <div className="main-nav-wrapper">
            <div className="container">
                <div className="main-nav-items-left">
                    <Logo/>
                    <MainNavItems/>
                </div>
                <div className="main-nav-items-right">
                    <Link to="/login">log in</Link>
                    <Link to="/registration">register</Link>
                    <Link to="/addnewjob" className="button">Post a Project</Link>
                </div>
            </div>
        </div>
    );
}

export default MainNavbar;