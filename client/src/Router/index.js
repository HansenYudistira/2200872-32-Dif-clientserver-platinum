import React from "react";
import { Routes, Route } from "react-router-dom";


// Pages
import LandingPage from "../Pages/LandingPage";
import ProfilePage from "../Pages/ProfilePage";
import Community from "../Pages/Community";
import AboutUs from "../Pages/AboutUs";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={LandingPage}/>
            <Route path="/ProfilePage" Component={ProfilePage} />
            <Route path="/Community" Component={Community} />
            <Route path="/About-us" Component={AboutUs} />
        </Routes>
    )
}

export default Router;