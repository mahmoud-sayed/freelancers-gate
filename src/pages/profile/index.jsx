import React from "react";

import './style.scss';

const Profile = () => {
    return (
        <main>
            <section className="header-background"></section>
            <div className="container">
                <section className="profile-header">
                    <div className="profile-image"><img src="" alt="" /></div>
                    <div className="profile-basic-info"></div>
                </section>
                <section className="profile-content">
                    <section className="profile-content-main"></section>
                    <section className="profile-content-sidebar"></section>
                </section>
            </div>
        </main>
    );
}

export default Profile;