import React from "react";
import './../../global/global-style.scss';
import './style.scss';
import MainNavbar from "./mainNavbar";
import SecondreNavbar from "./secondaryNavbar";

const Header = () => {
    return (        
        <header className="Header">
            <MainNavbar/>
            {/*<SecondreNavbar/>*/}
        </header>
    );
}

export default Header;