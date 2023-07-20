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
import RockPaperScissorsPage from "../Pages/RockPaperScissorsPage";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={LandingPage}/>
            <Route path="/profilePage" Component={ProfilePage} />
            <Route path="/registerPage" Component={RegisterPage} />
            <Route path="/loginPage" Component={LoginPage} />
            <Route path="/community" Component={Community} />
            <Route path="/gamelist" Component={GameListPage} />
            <Route path="/About-us" Component={AboutUs} />  
            <Route path="/rps" Component={RockPaperScissorsPage} />  
        </Routes>
    )
}

export default Router;
