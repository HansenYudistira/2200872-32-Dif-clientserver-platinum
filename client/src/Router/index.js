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
import Share from "../Pages/Share";
// IMPORT PAGES
import NotFound from "../Pages/NotFound";
import RockPaperScissorsPage from "../Pages/RockPaperScissorsPage";

function Router() {
    return (
        <Routes>
            <Route path="/register" Component={RegisterPage}/>
            <Route path="/login" Component={LoginPage}/>
            <Route path="/" Component={LandingPage}/>
            <Route path="/community" Component={Community} />
            <Route path="/gamelist" Component={GameListPage} />
            <Route path="/About-us" Component={AboutUs} />  
            <Route path="/Share" Component={Share} />  
            <Route path="/profilePage" Component={ProfilePage} />
            <Route path="/rps" Component={RockPaperScissorsPage} />  
            <Route path="*" Component={NotFound}/>
        </Routes>
    )
}

export default Router;
