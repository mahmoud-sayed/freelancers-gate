import React from "react";
import './style.scss';
//components imported
// import SingleJob from "../../components/singleJob";
// import Proposals from "../../components/proposals";

// for single page routes
import { Link, Outlet } from "react-router-dom";

const SingleJobView = () => {
    return (

        <section className="single-job-page">
            <section className="single-job-header">
                <div className="single-job-header-container">
                    <h1 className="single-job-title">Front end developer (JavaScript / ReactJS)</h1>
                    <ul className="single-job-nav">
                        <Link to="/singlejobview" className="a"><li className="single-job-nav-item">Details</li></Link>
                        <Link to="/singlejobview/proposals" className="a">
                            <li className="single-job-nav-item">Proposals</li>
                        </Link>
                    </ul>
                </div>
            </section>
            <section className="single-job-body-wrapper">
                <div className="single-job-body-content">
                    <Outlet />
                </div>
            </section>
        </section>

    );
}

export default SingleJobView;