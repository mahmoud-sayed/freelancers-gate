import React from "react";

import './style.scss';

const Jobs = () => {
    return (
        <div className="jobs-page">
            <section className="jobs-page-intro">
                <div className="container">
                    <h1>browse</h1>
                    <form role="search">
                        <input type="search" name="job-search" id="search-input" spellcheck="false" />
                        <input type="button" value="Search" />
                    </form>
                </div>
            </section>
            <div className="container">

                <aside>
                    <section className="filters">
                        <h2>Filters</h2>
                        <h3>KeyWords</h3>
                        <form role="search" aria-label="sidebar">
                            <label htmlFor="search-keyWord-input">Word</label>
                            <input type="search" id="search-keyWord-input" spellCheck="false" />
                        </form>
                        <h3>Price: USD</h3>
                        <form role="search" aria-label="sidebar">
                            <div className="min-search-wrapper">
                                <label htmlFor="jop-minimum-price">min</label>
                                <input type="search" id="jop-minimum-price" spellCheck="false" />
                            </div>
                            <div className="max-search-wrapper">
                                <label htmlFor="jop-minimum-price" >min</label>
                                <input type="search" id="jop-minimum-price" spellCheck="false" />
                            </div>
                        </form>
                    </section>
                    <section className="skills-categories">
                        <form role="search" aria-label="sidebar">
                            <label htmlFor="categories-search"></label>
                            <input type="search" id="categories-search" placeholder="Category OR Skill" spellCheck="false" />
                        </form>
                        <ul>
                            <li>website design</li>
                            <li>mobile apps</li>
                            <li>Android Apps</li>
                            <li>graphic design</li>
                            <li>UI/UX</li>
                            <li>sales</li>
                            <li>wordpress</li>
                            <li>Laravel</li>
                            <li>Magento</li>
                            <li>data entry</li>
                        </ul>
                    </section>
                </aside>
                <main>
                    <section className="sort-jobs">
                        <h2>top results</h2>

                        <label for="jobs-sort">sort By:</label>

                        <select id="jobs-sort">
                            <option value="latest" selected>latest</option>
                            <option value="oldest">oldest</option>
                        </select>
                    </section>
                    <section>
                        <div className="job">
                            <div className="job-title"></div>
                            <div className="job-description"></div>
                            <div className="required-job-skills"></div>
                            <div className="reviews"></div>
                        </div>
                        <div className="project-budget-estimation">
                            <div className="project-budget"></div>
                            <div className="project-posted-since"></div>
                            <div className="project-estimation"></div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Jobs;