import React, { Fragment } from "react";
import {  Routes,Route } from 'react-router-dom';

// pages imported
import Home from './../../pages/Home/index';
import HowItWorks from "./../../pages/howItWorks";
import AddNewJob from "./../../pages/addNewJob";
import Chat from "./../../pages/chat";
import CompleatProfileInfo from "./../../pages/compleatProfileInfo";
import EmailUs from "./../../pages/emailUs";
import Jobs from "./../../pages/jobs";
import Login from "./../../pages/login";
import Profile from "./../../pages/profile";
import Registration from "./../../pages/registration";
import SingleJobView from "./../../pages/singelJobView";


function RoutesComponent() {

    return (
        <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/howitworks" element={<HowItWorks />} />
                <Route path="/addnewjob" element={<AddNewJob />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/compleatprofileinfo" element={<CompleatProfileInfo />} />
                <Route path="/emailus" element={<EmailUs />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/singlejobview" element={<SingleJobView />} />
        </Routes>

    );
}

export default RoutesComponent;