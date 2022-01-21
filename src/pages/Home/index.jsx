import React from "react";
import './../../global/global-style.scss';
import './style.scss';
//react icon
import { BsCurrencyDollar, BsFillBriefcaseFill, BsBriefcase } from 'react-icons/bs';


const Home = () => {
    return (
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
                        <div className="card">
                            <div className="card-head">
                                <BsBriefcase className="card-icon" />
                                <h3 className="card-title">Post job</h3>
                            </div>
                            <div className="card-description">
                                <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-head">
                                <BsBriefcase className="card-icon" />
                                <h3 className="card-title">Post job</h3>
                            </div>
                            <div className="card-description">
                                <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="What-great-about-it">

                    </div>
                </div>
            </section>
            <section className="make-it-real">
                Make it Real
            </section>
            <section className="categories">
                categories
            </section>

        </div>
    );
}

export default Home;