import React, { Fragment } from "react";
import './../../../global/global-style.scss';
import './style.scss';
import Logo from '../../logo';
import { Link } from 'react-router-dom';
import MainNavItems from "../mainNavItems";
import Login from "../../../pages/login";
import Register from "../../register";

const MainNavbar = () => {
    return (
        <div className="main-nav-wrapper">
            <div className="main-nav-items-left">
                <Link to="/"><Logo/></Link>
                <MainNavItems/>
            </div>
            <div className="main-nav-items-right">
                <Link to="/login"><Login/></Link>
                <Link to="/registration"><Register/></Link>
                <Link to="/addnewjob" className="button">post a project</Link>
            </div>
        </div>
    );
}

export default MainNavbar;