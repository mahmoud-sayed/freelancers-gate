import React from "react";
import './style.scss';
const SingleJob = () => {
  return (
    <section className="job-details-wrapper">
      <section className="job-details-main"></section>
      <aside className="job-details-side-bar">
        <div className="job-details-side-about-client"></div>
        <div className="job-details-side-apply-tips"></div>
      </aside>
    </section>
  );
}
export default SingleJob;