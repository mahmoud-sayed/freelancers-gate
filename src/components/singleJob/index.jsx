import React from "react";
import './style.scss';
import { BsFillClockFill, BsFillFlagFill } from 'react-icons/bs';
import { IoIosAttach } from 'react-icons/io';
const SingleJob = () => {

  //to open PDF File
  const openPDFFile = () => {
    window.open(`file-name.pdf`);
  }
  return (
    <section className="job-details-wrapper">
      <section className="job-details-main">
        <div className="job-details-header">
          <h2 className="job-details-title">Project Details</h2>
          <div className="job-details-budget">
            <p className="job-budget">$250.00 – 750.00 USD</p>
            <div className="binding-clock">
              <BsFillClockFill className="clock" />
              <p className="job-ends-after"> BIDDING ENDS IN 3 DAYS, 6 HOURS</p>
            </div>
          </div>
        </div>
        <div className="job-description-skills">
          <p className="job-description">
            DOCTOR WEBSITE PORTFOLIO NEEDED PLEASE SEND ME LINKS OF YOUR WORK

            I need a web developer with technical background not only WordPress design skills.

            You will only provide the code and technical issues I will work with you for the design and you will help me with some doctor's services in English language. The website would be in 2 languages the first one is on me you will help me with English terminologies and posts. If you know some graphic designing that'd be nice but not necessary.

            The website requires only the technical support and an online payment and some knowledge of healthcare terminology in English to help us . You won't create the entire site alone. I am a WordPress designer so we will develop it in WordPress, but I need extremely strong knowledge of html, js and other languages to create a strong fast and technically right website
          </p>
          <h3 className="required-skills">Skills Required</h3>
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
          <div className="job-description-footer">
            <p className="project-id">Project ID: 32958910</p>
            <div className="report-project">
              <BsFillFlagFill className="flag" />
              <p className="report">Report Project</p>
            </div>
          </div>
          <div className="attachments-wrapper">
            <div className="line"></div>
            <h3 className="attachments-title">Attachments</h3>
            <div className="attachments">
              <IoIosAttach className="attachment-icon" />
              <p className="file-name" onClick={openPDFFile}>file name</p>
            </div>
            <div className="attachments">
              <IoIosAttach className="attachment-icon" />
              <p className="file-name" onClick={openPDFFile}>file name</p>
            </div>
            <div className="attachments">
              <IoIosAttach className="attachment-icon" />
              <p className="file-name" onClick={openPDFFile}>file name</p>
            </div>
            <div className="attachments">
              <IoIosAttach className="attachment-icon" />
              <p className="file-name" onClick={openPDFFile}>file name</p>
            </div>
            <div className="attachments">
              <IoIosAttach className="attachment-icon" />
              <p className="file-name" onClick={openPDFFile}>file name</p>
            </div>
          </div>
        </div>
        <div className="place-bid-wrapper">
          <div className="place-bid-header">

          </div>
          <div className="place-bid-body-form-footer"></div>
        </div>
      </section>
      <aside className="job-details-side-bar">
        <div className="job-details-side-about-client"></div>
        <div className="job-details-side-apply-tips"></div>
      </aside>
    </section>
  );
}
export default SingleJob;