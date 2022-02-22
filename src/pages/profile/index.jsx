import React from "react";
import { MdMonetizationOn } from 'react-icons/md';
import { GiTrumpetFlag } from 'react-icons/gi';
import './style.scss';
import RatingStars from './../../components/ratingStars/index';

const Profile = () => {
    return (
        <main>
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
                        <div className="about"></div>
                        <div className="skills"></div>
                    </section>

                </section>
            </div>
        </main>
    );
}

export default Profile;