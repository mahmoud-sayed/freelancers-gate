import React from "react";
import './../../global/global-style.scss';
import './style.scss';
import android from './../../assets/android.png';
import apple from './../../assets/apple.png';
import Logo from "../logo";
import { AiFillYoutube, AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer-content">
                    <div className="freelancers">
                        <h4>freelancers</h4>
                        <ul>
                            <li><Link to="#">categorys</Link></li>
                            <li><Link to="#">projects</Link></li>
                            <li><Link to="#">freelancers</Link></li>
                            <li><Link to="#">API for developers</Link></li>
                        </ul>
                    </div>
                    <hr className="temporary-hr" />
                    <div className="about">
                        <h4>about</h4>
                        <ul>
                            <li><Link to="#">about us</Link></li>
                            <li><Link to="/howitworks">how it works</Link></li>

                        </ul>
                    </div>
                    <hr className="temporary-hr" />
                    <div className="terms">
                        <h4>terms</h4>
                        <ul>
                            <li><Link to="#">privacy policy</Link></li>
                            <li><Link to="#">terms and policy</Link></li>
                            <li><Link to="#">copyRight policy</Link></li>
                            <li><Link to="#">fees and charges</Link></li>
                        </ul>
                    </div>

                    <div className="apps">
                        <Logo className="logo" />
                        <h4>apps</h4>
                        <ul className="mopile-app">
                            <li><Link to=""><img src={apple} alt="download app for apple" /></Link></li>
                            <li><Link to=""><img src={android} alt="download app for android" /></Link></li>
                        </ul>

                        <div className="social-icons">
                            <ul className="icons-list">
                                <li className="facebook"><Link to="#"><AiFillFacebook /></Link></li>
                                <li className="twitter"><Link to="#"><AiOutlineTwitter /></Link></li>
                                <li className="youtube"><Link to="#"><AiFillYoutube /></Link></li>
                                <li className="instgram"><Link to="#"><AiFillInstagram /></Link></li>
                            </ul>
                        </div>

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