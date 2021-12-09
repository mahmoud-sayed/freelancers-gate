import React from "react";
import './../../global/global-style.scss';
import './style.scss';
import App from './../../App';
import Logo from "../logo";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer-content">
                    <div className="freelancers">
                        <h4>freelancers</h4>
                        <ul>
                            <li>categorys</li>
                            <li>projects</li>
                            <li>freelancers</li>
                            <li>API for developers</li>
                        </ul>
                    </div>
                    <div className="about">
                        <h4>about</h4>
                        <ul>
                            <li>about us</li>
                            <li>how it works</li>

                        </ul>
                    </div>
                    <div className="terms">
                        <h4>terms</h4>
                        <ul>
                            <li>privacy policy</li>
                            <li>terms and policy</li>
                            <li>copyRight policy</li>
                            <li>fees and charges</li>
                        </ul>
                    </div>
                    <div className="apps">
                        <Logo/>
                        <h4>apps</h4>
                        <ul className="mopile-app">
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                
                <div className="copyright-wrapper">
                    <hr />
                    <div className="copyright-content">
                        <div className="registerd-user">
                            <p><span>50.285</span> registerduser</p>
                        </div>
                        <div className="total-job-posted">
                            <p><span>60.759</span> total job posted</p>
                        </div>
                        <div className="copy-rights">
                            &copy; 2021 freelancers gate - All Rights Reserved. v1.0.0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;