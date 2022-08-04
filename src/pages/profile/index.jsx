import React from "react";
import { MdMonetizationOn } from 'react-icons/md';
import { GiTrumpetFlag } from 'react-icons/gi';
import { BsPersonFill } from 'react-icons/bs';
import { IoShieldCheckmark, IoCardOutline, IoMail } from 'react-icons/io5';
import { FaAddressCard, FaPhoneAlt } from 'react-icons/fa';
import './style.scss';
import RatingStars from './../../components/ratingStars/index';
import { useUserAuth } from './../../context/AuthProvider';

const Profile = () => {
    const { user } = useUserAuth();

    return (
        <main className="profile">
            <section className="header-background"></section>
            <div className="container">
                <section className="profile-header">
                    <div className="profile-image"><img src="https://via.placeholder.com/265x265" alt="ProfilePhoto " /></div>
                    <div className="profile-basic-info">
                        <div className="name-tagName">
                            <div className="name-tagName-wrapper">
                                <h3 className="freelancer">Mahmoud S.</h3>
                                <p className="freelancer-name-tag">@mamoudBoraye88</p>
                            </div>
                            <button>Edit Profile</button>
                        </div>
                        <div className="title">
                            <h2>Front end developer (javaScript / ReactJS)</h2>
                        </div>
                        <div className="rating-stars">
                            <div className="srats-wrapper"><RatingStars className='stars' /></div>
                            <p>(0 reviews)</p>
                        </div>
                        <div className="money-rate">
                            <div className="money-sign"><MdMonetizationOn className="icon" /></div>
                            <p className="money">$50 USD / hour</p>
                        </div>
                        <div className="location-country">
                            <div className="flag">
                                <img src="https://via.placeholder.com/21x16" alt="flag of country name" />
                            </div>
                            <p>Hurghada, Egypt</p>
                        </div>
                        <div className="join-since">
                            <div className="icon-wrapper"><GiTrumpetFlag className="icon" /></div>
                            <p>Joined December 25, 2015</p>
                        </div>

                    </div>
                </section>
                <section className="profile-content">
                    <section className="about-skills">
                        <div className="about">
                            <div className="title-button">
                                <h3>About</h3>
                                <button>Add</button>
                            </div>
                            <hr />
                            <p>I'm a Passionate Web Developer...
                                Front End developer building websites using:
                                HTML, CSS, JavaScript. React.js + Redux I specialized in JavaScript and have some experience working with PHP, MySQL, Magento 2, Laravel Framework, familiar with Jira, G Suite, I can use my skills, learning along the way,I am a self-motivated person have a great passion for programming.</p>
                        </div>
                        <div className="skills">
                            <div className="title-button">
                                <h3>Skills</h3>
                                <button> Add </button>
                            </div>
                            <hr />
                            <ul>
                                <li className="skill">HTML</li>
                                <li>.</li>
                                <li className="skill">CSS</li>
                                <li>.</li>
                                <li className="skill">JavaScript</li>
                                <li>.</li>
                                <li className="skill">ReactJS</li>
                                <li>.</li>
                                <li className="skill">git</li>
                            </ul>
                        </div>
                    </section>
                    <section className="reviews-verifications">
                        <div className="reviews">
                            <div className="title-button">
                                <h3>Reviews</h3>
                            </div>
                            <hr />
                            <div className="review-content-wrapper">
                                <div className="review"></div>
                                <hr />
                            </div>
                        </div>
                        <div className="verifications">
                            <div className="title-button">
                                <h3>verifications</h3>
                                <button>Add</button>
                            </div>
                            <hr />
                            <div className="verifications-wrapper">

                                <div className="verification-content">
                                    <div className="verification-icon"><FaAddressCard /></div>
                                    <div className="verification-description">Identity verified</div>
                                </div>
                                <div className="verification-content">
                                    <div className="verification-icon"><IoShieldCheckmark /></div>
                                    <div className="verification-description">Payment verified</div>
                                </div>
                                <div className="verification-content">
                                    <div className="verification-icon"><IoCardOutline /></div>
                                    <div className="verification-description">Deposit made</div>
                                </div>
                                <div className="verification-content">
                                    <div className="verification-icon"><IoMail /></div>
                                    <div className="verification-description">Email verified</div>
                                </div>
                                <div className="verification-content">
                                    <div className="verification-icon"><BsPersonFill /></div>
                                    <div className="verification-description">Profile completed</div>
                                </div>
                                <div className="verification-content">
                                    <div className="verification-icon"><FaPhoneAlt /></div>
                                    <div className="verification-description">Phone verified</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="portfolio">
                        <div className="title-button">
                            <h3>Portfolio</h3>
                            <button>Add</button>
                        </div>
                        <hr />
                    </section>
                    <section className="experience">
                        <div className="title-button">
                            <h3>Experience</h3>
                            <button>Add</button>
                        </div>
                        <hr />
                    </section>
                    <section className="education">
                        <div className="title-button">
                            <h3>Education</h3>
                            <button>Add</button>
                        </div>
                        <hr />
                    </section>


                </section>
            </div>
        </main>
    );
};

export default Profile;