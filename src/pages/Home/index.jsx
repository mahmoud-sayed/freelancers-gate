import React, { useEffect } from "react";
import './../../global/global-style.scss';
import './style.scss';
import { Link } from "react-router-dom";
//react icon
import { BsCurrencyDollar, BsFillBriefcaseFill, BsFillCreditCard2BackFill, BsPersonLinesFill, BsPersonCheckFill, BsShieldFillCheck, BsFillChatDotsFill, BsAwardFill, BsLaptop, BsSearch, BsWordpress, BsTranslate, BsShopWindow, BsShareFill } from 'react-icons/bs';
import { RiBookMarkLine, RiKeyboardBoxFill, RiTimerFill, RiAndroidFill, RiAppleFill, RiPencilFill, RiStarFill, RiTeamFill, RiMoreFill } from "react-icons/ri";
import { MdMonitor } from 'react-icons/md';
import { FaMobileAlt, FaTruck, FaJsSquare, FaLinux, FaJava, FaLaravel, FaDev, FaCalculator, FaFilm, FaUnity } from "react-icons/fa";
//image
import image from './../../assets/homePhotos/skills-images/img-src';
import { useDispatch } from "react-redux";



const Home = () => {



    return (
        <main>
            <div className="home-wrapper">
                <section className="home-header-wrapper">
                    <div className="content">
                        <div className="container">
                            <h1>Hire the best<br className="br" /> freelancers for any job, online.</h1>
                            <p className="sub-title">Find great talent. Build your business.
                                <br className="br" />Take your career to the next level.</p>
                            <div className="buttons">
                                <button className="button-1"> Hire a Freelancer <BsFillBriefcaseFill className="job-sign" /></button>
                                <button className="button-2"> Earn Money Freelancing <BsCurrencyDollar className="dollar-sign" /></button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="brief-section">
                    <div className="container">
                        <div className="need-something-done-wrapper">
                            <h2 className="something-title">Need Something Done?</h2>
                            <div className="cards">

                                <div className="card">
                                    <div className="card-head">
                                        <BsFillBriefcaseFill className="card-icon" />
                                        <h3 className="card-title">Post job</h3>
                                    </div>
                                    <div className="card-description">
                                        <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-head">
                                        <BsPersonCheckFill className="card-icon" />
                                        <h3 className="card-title">Choose freelancers</h3>
                                    </div>
                                    <div className="card-description">
                                        <p>No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-head">
                                        <BsShieldFillCheck className="card-icon" />
                                        <h3 className="card-title">Pay safely</h3>
                                    </div>
                                    <div className="card-description">
                                        <p>Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-head">
                                        <BsFillChatDotsFill className="card-icon" />
                                        <h3 className="card-title">We’re here to help</h3>
                                    </div>
                                    <div className="card-description">
                                        <p>Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="vertical-line"></div>
                        <hr />
                        <div className="What-great-about-it">
                            <h2 className="something-title">What's great about it?</h2>
                            <div className="cards">

                                <div className="card">
                                    <div className="card-head">
                                        <BsPersonLinesFill className="card-icon" />
                                        <h3 className="card-title">Browse portfolios</h3>
                                    </div>
                                    <div className="card-description">
                                        <p>Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</p>
                                    </div>
                                </div><div className="card">
                                    <div className="card-head">
                                        <BsFillCreditCard2BackFill className="card-icon" />
                                        <h3 className="card-title">Fast bids</h3>
                                    </div>
                                    <div className="card-description">
                                        <p>Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid on within 60 seconds.</p>
                                    </div>
                                </div><div className="card">
                                    <div className="card-head">
                                        <BsAwardFill className="card-icon" />
                                        <h3 className="card-title">Quality work</h3>
                                    </div>
                                    <div className="card-description">
                                        <p>Freelancer.com has by far the largest pool of quality freelancers globally- over 50 million to choose from.</p>
                                    </div>
                                </div><div className="card">
                                    <div className="card-head">
                                        <RiTimerFill className="card-icon" />
                                        <h3 className="card-title">Track progress
                                        </h3>
                                    </div>
                                    <div className="card-description">
                                        <p>Keep up-to-date and on-the-go with our time tracker, and mobile app. Always know what freelancers are up to.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="skills">
                    <div className="container">
                        <div className="grouped-skills">
                            <h2>Find The Best Skilled Freelancers</h2>
                            <div className="skills-wrapper">
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src='https://i.postimg.cc/P5HFCYnt/salse.png' alt="Professional Sales" />
                                    </Link>
                                    <h3>Professional Sales</h3>
                                </div>
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.writing} alt="Talented Writers" />
                                    </Link>
                                    <h3>Talented Writers</h3>
                                </div>
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.voiceOver} alt="Professional Voice Over" />
                                    </Link>
                                    <h3>Professional Voice Over</h3>
                                </div>
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.translators} alt="translators professional" />
                                    </Link>
                                    <h3>translators professional</h3>
                                </div>
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.mediaProduction} alt="media production" />
                                    </Link>
                                    <h3>Media production</h3>
                                </div>
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.hr} alt="Recruitment and Talent Acquisition" />
                                    </Link>
                                    <h3>Recruitment &amp; Talent Acquisition</h3>
                                </div>
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.graphicDesign} alt="creative graphic designer" />
                                    </Link>
                                    <h3>Creative Graphic Designer</h3>
                                </div>
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.finance} alt="skilled accountants" />
                                    </Link>
                                    <h3>Skilled Accountants</h3>
                                </div>
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.developers} alt="professional developers" />
                                    </Link>
                                    <h3>professional developers</h3>
                                </div>
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.consulting} alt="professional consultants" />
                                    </Link>
                                    <h3>professional consultants</h3>
                                </div>

                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.arctechure} alt="professional architecture" />
                                    </Link>
                                    <h3>professional architecture</h3>

                                </div>
                                <div className="skill">
                                    <Link to="/jobs" className="skill-link">
                                        <img src={image.adminstration} alt="administration" />

                                    </Link>
                                    <h3>administration</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="skills-categories">
                    <div className="container">
                        <div className="skills-categories-wrapper">
                            <div className="skills-categories-header">
                                <h2 className="categories-title">Skills &amp; Categories</h2>
                            </div>
                            <div className="skills-categories-content-wrapper">
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <MdMonitor className="icon" />
                                        <h4>website design</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <FaMobileAlt className="icon" />
                                        <h4>mobile apps</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <RiAndroidFill className="icon" />
                                        <h4>Android Apps</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <RiAppleFill className="icon" />
                                        <h4>iphone apps</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <BsLaptop className="icon" />
                                        <h4>Software Architecture</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <RiPencilFill className="icon" />
                                        <h4>graphic design</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <RiStarFill className="icon" />
                                        <h4>logo design</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <BsWordpress className="icon" />
                                        <h4>Wordpress</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <FaTruck className="icon" />
                                        <h4>Logistics</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <BsSearch className="icon" />
                                        <h4>web search</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <FaJsSquare className="icon" />
                                        <h4>JavaScript</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <FaLinux className="icon" />
                                        <h4>linux</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <FaJava className="icon" />
                                        <h4>JAVA</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <FaLaravel className="icon" />
                                        <h4>Laravel</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <FaDev className="icon" />
                                        <h4>software developers</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <BsTranslate className="icon" />
                                        <h4>translators</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <FaCalculator className="icon" />
                                        <h4>finance</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <FaFilm className="icon" />
                                        <h4>film making</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <BsShopWindow className="icon" />
                                        <h4>marketing</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <BsShareFill className="icon" />
                                        <h4>digital marketing</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <FaUnity className="icon" />
                                        <h4>game development</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <RiTeamFill className="icon" />
                                        <h4>public relations</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <RiKeyboardBoxFill className="icon" />
                                        <h4>data entry</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <RiBookMarkLine className="icon" />
                                        <h4>copy writing</h4>
                                    </Link>
                                </div>
                                <div className="skill-category-item">
                                    <Link to="/jobs" className="skill-category-item-son">
                                        <RiMoreFill className="icon" />
                                        <h4>more</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;