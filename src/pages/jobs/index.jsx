import React, { useState } from "react";
import RatingStars from "../../components/ratingStars";
import { Link } from "react-router-dom";
//Icons imports
import { BsPersonFill } from 'react-icons/bs';

//styling
import './style.scss';

const Jobs = () => {
    // for show and hide filters in mobile view
    const [isActive, setIsActive] = useState(false);


    // for show and hide filters in mobile view
    const show = () => {
        return setIsActive((e) => !isActive);
    }
    // const widthOutput = document.querySelector('.jobs-page');

    // function resize() {

    //     widthOutput.value = window.innerWidth;
    // }

    // window.onresize = resize;
    const screenSize = window.innerWidth;

    const WindowToggleShow = () => {
        if (screenSize <= 768) {
            return (
                <React.Fragment>
                    <h2 className="filters-header" onClick={show}>Filters</h2>
                    {isActive && (
                        <div className="filters-and-skills-categories-wrapper">
                            <section className="filters">
                                <div className="search-by-keyWord-wrapper">

                                    <h3>KeyWords</h3>
                                    <form className="keyword-form" role="search" aria-label="sidebar">
                                        <label htmlFor="search-keyWord-input">Word</label>
                                        <input type="search" id="search-keyWord-input" spellCheck="false" placeholder="ex: web developer" />
                                    </form>
                                </div>
                                <div className="search-by-price-wrapper">

                                    <h3>Price $USD</h3>
                                    <form className="price-form" role="search" aria-label="sidebar">
                                        <div className="min-search-wrapper">
                                            <label htmlFor="jop-minimum-price">min</label>
                                            <input type="search" id="jop-minimum-price" spellCheck="false" placeholder="ex: $50 USD" />
                                        </div>
                                        <div className="max-search-wrapper">
                                            <label htmlFor="jop-maximum-price" >max</label>
                                            <input type="search" id="jop-maximum-price" spellCheck="false" placeholder="ex: $600 USD" />
                                        </div>
                                    </form>
                                </div>
                            </section>
                            <section className="skills-categories">
                                <h2 className="skills-categories-header">Categories &amp; Skills</h2>
                                <form className="skills-search-form" role="search" aria-label="sidebar">
                                    <label htmlFor="categories-search"></label>
                                    <input type="search" id="categories-search" placeholder="ex: category, skills" spellCheck="false" />
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
                    )}
                </React.Fragment>
            )
        } else {
            return (

                <React.Fragment>
                    <h2 className="filters-header" >Filters</h2>
                    <div className="filters-and-skills-categories-wrapper">
                        <section className="filters">
                            <div className="search-by-keyWord-wrapper">

                                <h3>KeyWords</h3>
                                <form className="keyword-form" role="search" aria-label="sidebar">
                                    <label htmlFor="search-keyWord-input">Word</label>
                                    <input type="search" id="search-keyWord-input" spellCheck="false" placeholder="ex: web developer" />
                                </form>
                            </div>
                            <div className="search-by-price-wrapper">

                                <h3>Price $USD</h3>
                                <form className="price-form" role="search" aria-label="sidebar">
                                    <div className="min-search-wrapper">
                                        <label htmlFor="jop-minimum-price">min</label>
                                        <input type="search" id="jop-minimum-price" spellCheck="false" placeholder="ex: $50 USD" />
                                    </div>
                                    <div className="max-search-wrapper">
                                        <label htmlFor="jop-maximum-price" >max</label>
                                        <input type="search" id="jop-maximum-price" spellCheck="false" placeholder="ex: $600 USD" />
                                    </div>
                                </form>
                            </div>
                        </section>
                        <section className="skills-categories">
                            <h2 className="skills-categories-header">Categories &amp; Skills</h2>
                            <form className="skills-search-form" role="search" aria-label="sidebar">
                                <label htmlFor="categories-search"></label>
                                <input type="search" id="categories-search" placeholder="ex: category, skills" spellCheck="false" />
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
                </React.Fragment>
            )
        }
    }

    return (
        <div className="jobs-page">
            <div className="jobs-page-intro">
                <div className="container">
                    <h1>Browse</h1>
                    <form role="search">
                        <input type="search" name="job-search" id="search-input" spellCheck="false" placeholder="Search Freelancers, Projects, or Contests" />
                        <input type="button" value="Search" />
                    </form>
                </div>
            </div>
            <div className="content-container">
                <aside>
                    <div className="aside-content-wrapper">
                        {WindowToggleShow()}

                    </div>
                </aside>
                <main>
                    <section className="sort-jobs">
                        <h2 className="sort-head">Top results</h2>
                        <div className="sort-selector">
                            <label htmlFor="jobs-sort">Sort by</label>
                            <select id="jobs-sort">
                                <option value="latest" defaultValue>latest</option>
                                <option value="oldest">oldest</option>
                            </select>
                        </div>
                    </section>
                    <section className="jobs-section">
                        <Link to='/singlejobview    '>
                            <div className="job">
                                <div className="job-card-head">
                                    <h2 className="job-title"> Front end developer (JavaScript, ReactJS)</h2>
                                    <h2 className="job-budget">
                                        $250.00 – 750.00 USD
                                    </h2>
                                </div>
                                <div className="job-body-description">
                                    <p className="job-description">
                                        Looking for next.js developer to work on our app. There will be an interview call for selection so only apply if you have worked with next.js before and know how to create api using next.js and being able to write react components well… <span>more</span>
                                    </p>
                                    <p className="job-posted-since">Posted 8 minutes ago</p>
                                </div>
                                <div className="job-footer-rating-and-skills">
                                    <div className="required-job-skills">
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
                                    <div className="reviews">
                                        <div className="rating">
                                            <BsPersonFill />
                                            <RatingStars />
                                        </div>
                                        <div className="reviews">( 1 {1 >= 2 ? "Review" : "Reviews"})</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/singlejobview    '>
                            <div className="job">
                                <div className="job-card-head">
                                    <h2 className="job-title"> Front end developer (JavaScript, ReactJS)</h2>
                                    <h2 className="job-budget">
                                        $250.00 – 750.00 USD
                                    </h2>
                                </div>
                                <div className="job-body-description">
                                    <p className="job-description">
                                        Looking for next.js developer to work on our app. There will be an interview call for selection so only apply if you have worked with next.js before and know how to create api using next.js and being able to write react components well… <span>more</span>
                                    </p>
                                    <p className="job-posted-since">Posted 8 minutes ago</p>
                                </div>
                                <div className="job-footer-rating-and-skills">
                                    <div className="required-job-skills">
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
                                    <div className="reviews">
                                        <div className="rating">
                                            <BsPersonFill />
                                            <RatingStars />
                                        </div>
                                        <div className="reviews">( 1 {1 >= 2 ? "Review" : "Reviews"})</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/singlejobview    '>
                            <div className="job">
                                <div className="job-card-head">
                                    <h2 className="job-title"> Front end developer (JavaScript, ReactJS)</h2>
                                    <h2 className="job-budget">
                                        $250.00 – 750.00 USD
                                    </h2>
                                </div>
                                <div className="job-body-description">
                                    <p className="job-description">
                                        Looking for next.js developer to work on our app. There will be an interview call for selection so only apply if you have worked with next.js before and know how to create api using next.js and being able to write react components well… <span>more</span>
                                    </p>
                                    <p className="job-posted-since">Posted 8 minutes ago</p>
                                </div>
                                <div className="job-footer-rating-and-skills">
                                    <div className="required-job-skills">
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
                                    <div className="reviews">
                                        <div className="rating">
                                            <BsPersonFill />
                                            <RatingStars />
                                        </div>
                                        <div className="reviews">( 1 {1 >= 2 ? "Review" : "Reviews"})</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/singlejobview    '>
                            <div className="job">
                                <div className="job-card-head">
                                    <h2 className="job-title"> Front end developer (JavaScript, ReactJS)</h2>
                                    <h2 className="job-budget">
                                        $250.00 – 750.00 USD
                                    </h2>
                                </div>
                                <div className="job-body-description">
                                    <p className="job-description">
                                        Looking for next.js developer to work on our app. There will be an interview call for selection so only apply if you have worked with next.js before and know how to create api using next.js and being able to write react components well… <span>more</span>
                                    </p>
                                    <p className="job-posted-since">Posted 8 minutes ago</p>
                                </div>
                                <div className="job-footer-rating-and-skills">
                                    <div className="required-job-skills">
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
                                    <div className="reviews">
                                        <div className="rating">
                                            <BsPersonFill />
                                            <RatingStars />
                                        </div>
                                        <div className="reviews">( 1 {1 >= 2 ? "Review" : "Reviews"})</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/singlejobview    '>
                            <div className="job">
                                <div className="job-card-head">
                                    <h2 className="job-title"> Front end developer (JavaScript, ReactJS)</h2>
                                    <h2 className="job-budget">
                                        $250.00 – 750.00 USD
                                    </h2>
                                </div>
                                <div className="job-body-description">
                                    <p className="job-description">
                                        Looking for next.js developer to work on our app. There will be an interview call for selection so only apply if you have worked with next.js before and know how to create api using next.js and being able to write react components well… <span>more</span>
                                    </p>
                                    <p className="job-posted-since">Posted 8 minutes ago</p>
                                </div>
                                <div className="job-footer-rating-and-skills">
                                    <div className="required-job-skills">
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
                                    <div className="reviews">
                                        <div className="rating">
                                            <BsPersonFill />
                                            <RatingStars />
                                        </div>
                                        <div className="reviews">( 1 {1 >= 2 ? "Review" : "Reviews"})</div>
                                    </div>
                                </div>
                            </div>
                        </Link>


                    </section>
                </main>
            </div>
        </div>
    );
}

export default Jobs;