import React from "react";
import './../../global/global-style.scss';
import './style.scss';
//react icon
import { BsCurrencyDollar, BsFillBriefcaseFill } from 'react-icons/bs';


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
            <section className="need-something-done">
                <h1>need-something-done</h1>
            </section>
            <section className="What-great-about-it">
                <h1>Find great work</h1>
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