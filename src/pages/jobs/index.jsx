import React from "react";

//Icons imports
import { BsPersonFill } from 'react-icons/bs'

//styling
import './style.scss';

const Jobs = () => {
    return (
        <div className="jobs-page">
            <div className="jobs-page-intro">
                <div className="container">
                    <h1>browse</h1>
                    <form role="search">
                        <input type="search" name="job-search" id="search-input" spellCheck="false" placeholder="Search Freelancers, Projects, or Contests" />
                        <input type="button" value="Search" />
                    </form>
                </div>
            </div>
            <div className="content-container">
                <aside>
                    <div className="aside-content-wrapper">

                        <section className="filters">
                            <h2>Filters</h2>
                            <div className="search-by-keyWord-wrapper">

                                <h3>KeyWords</h3>
                                <form role="search" aria-label="sidebar">
                                    <label htmlFor="search-keyWord-input">Word</label>
                                    <input type="search" id="search-keyWord-input" spellCheck="false" />
                                </form>
                            </div>
                            <div className="search-by-price-wrapper">

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
                            </div>
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
                    </div>
                </aside>
                <main>
                    <section className="sort-jobs">
                        <h2 className="sort-head">top results</h2>
                        <div className="sort-selector">
                            <label htmlFor="jobs-sort">sort By:</label>
                            <select id="jobs-sort">
                                <option value="latest" defaultValue>latest</option>
                                <option value="oldest">oldest</option>
                            </select>
                        </div>
                    </section>
                    <section>
                        <div className="job">
                            <div className="job-title"> Web app (React Next.js developer required)</div>
                            <div className="job-description">
                                - Looking for next.js developer to work on our app. There will be an interview call for selection so only apply if you have worked with next.js before and know how to create api using next.js and being able to write react components well…
                            </div>
                            <div className="required-job-skills">HTML . CSS . JavaScript . Angular5</div>
                            <div className="reviews">
                                <BsPersonFill />
                            </div>
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