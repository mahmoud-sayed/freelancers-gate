import React from "react";

import './style.scss';

const Jobs = () => {
    return (
        <div className="jobs-page">
            <section className="jobs-page-intro">
                <div className="container">
                    <form action="">
                        <input type="search" name="job-search" id="" />
                        <input type="button" value="Search" />
                    </form>
                </div>
            </section>
            <div className="container">

                <aside>aside</aside>
                <main>main</main>
            </div>
        </div>
    );
}

export default Jobs;