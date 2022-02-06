import React from "react";
import SkillsTagsField from "../../components/skillsTagsField";
import { TiDeviceDesktop } from "react-icons/ti";
import './style.scss';

const AddNewJob = () => {
    return (
        <main>
            <div className="header">
                <div className="container">

                    <h1 role="heading">Tell us what you need done</h1>
                    <p role="article">Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.</p>
                </div>
            </div>
            <div className="container">
                <section className="form-wrapper">
                    <form className="new-job-form" role="form">
                        <div className="project-name-wrapper">

                            <label className="project-name-label" htmlFor="project-name">Choose a name for your project</label>
                            <input className="project-name-input" type="text" name="project-name" id="project-name" />
                        </div>
                        <div className="project-description-wrapper">

                            <label className="project-description-label" htmlFor="project-description">Tell us more about your project</label>
                            <textarea className="project-description-input" name="" id="" cols="30" rows="10" maxLength="4000"></textarea>
                            <p>4000 characters remaining</p>
                        </div>
                        <div className="require-skills-wrapper">
                            <label className="require-skills-title" htmlFor="">What skills are required?</label>
                            <p className="require-skills-description">Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.</p>
                            <SkillsTagsField className="require-skills-input" />
                        </div>

                        <div className="file-wrapper">
                            <input className="file-wrapper-input" type="file" id="file-uploaded" />
                            <label className="file-wrapper-label" htmlFor="file-uploaded">Drag &amp; drop any images or documents that might be helpful in explaining your brief here (Max file size: 25 MB).</label>
                        </div>
                        <div className="estimated-budget-wrapper">
                            <div className="min-search-wrapper">
                                <label htmlFor="jop-minimum-price">Minimum budget per hour</label>
                                <input type="search" id="jop-minimum-price" spellCheck="false" placeholder="ex: $50 USD" />
                            </div>
                            <div className="max-search-wrapper">
                                <label htmlFor="jop-maximum-price" >Maximum budget per hour</label>
                                <input type="search" id="jop-maximum-price" spellCheck="false" placeholder="ex: $600 USD" />
                            </div>
                        </div>
                    </form>
                    <div className="job-overview-wrapper">
                        <h2>Are these details correct?</h2>
                        <div className="job-card-wrapper">
                            <div className="card-head">

                                <TiDeviceDesktop className="device-icon" />

                                <p className="project-text">PROJECT</p>
                                <p className="project-budget">$10.00 – 30.00 USD per hour</p>
                            </div>
                            <div className="card-description">
                                <h2 className="card-description-title">Front End web developer(JavaScript, ReactJS)</h2>
                                <p className="card-description-body">Looking for next.js developer to work on our app. There will be an interview call for selection so only apply if you have worked with next.js before and know how to create api using next.js and being able to write react components</p>
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AddNewJob;