import React, { Fragment } from "react";
import './../../global/global-style.scss';
import './style.scss';
import Logo from '../logo';
import { Link } from 'react-router-dom';
import MainNavItems from "../mainNavItems";
import Login from "../../pages/login";
import Register from "../register";

const MainNavbar = () => {
    return (
        <Fragment>
            <div>
                <Logo/>
                <MainNavItems/>
            </div>
            <div>
                <Login/>
                <Register/>
                <button></button>
            </div>
        </Fragment>
    );
}

export default MainNavbar;