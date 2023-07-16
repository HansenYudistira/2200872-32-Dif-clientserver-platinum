import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "../Pages/LandingPage";
import ProfilePage from "../Pages/ProfilePage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import Community from "../Pages/Community";
import GameListPage from "../Pages/GameListPage";
import AboutUs from "../Pages/AboutUs";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={LandingPage}/>
            <Route path="/ProfilePage" Component={ProfilePage} />
            <Route path="/registerPage" component={RegisterPage} />
            <Route path="/loginPage" component={LoginPage} />
            <Route path="/community" Component={Community} />
            <Route path="/Community" Component={Community} />
            <Route path="/gamelist" Component={GameListPage} />
            <Route path="/About-us" Component={AboutUs} />  
        </Routes>
    )
}

export default Router;