import React from "react";
import './style.scss';
//components imported
import SingleJob from "../../components/singleJob";
import Proposals from "../../components/proposals";

// for single page routes
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const SingleJobView = () => {
    return (
        <Router>
            <section className="single-job-page">
                <section className="single-job-header">
                    <div className="single-job-header-container">
                        <h1 className="single-job-title">Front end developer (JavaScript / ReactJS)</h1>
                        <ul className="single-job-nav">
                            <Link to="/singlejobview/singleJob"><li className="single-job-nav-item">Details</li></Link>
                            <Link to="/singlejobview/proposals">
                                <li className="single-job-nav-item">Proposals</li>
                            </Link>
                        </ul>
                    </div>
                </section>
                <div className="body-wrapper">


                </div>
            </section>
        </Router>
    );
}

export default SingleJobView;