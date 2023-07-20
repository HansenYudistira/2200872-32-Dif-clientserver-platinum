import React from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT PAGES
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import NotFound from "../Pages/NotFound";
import Community from "../Pages/Community";
import GameListPage from "../Pages/GameListPage";
import AboutUs from "../Pages/AboutUs";
import RockPaperScissorsPage from "../Pages/RockPaperScissorsPage";

function Router() {
    return (
        <Routes>
            <Route path="/register" Component={RegisterPage}/>
            <Route path="/login" Component={LoginPage}/>
            <Route path="/" Component={LandingPage}/>
            <Route path="/profilePage" Component={ProfilePage} />
            <Route path="/community" Component={Community} />
            <Route path="/gamelist" Component={GameListPage} />
            <Route path="/About-us" Component={AboutUs} />  
            <Route path="/rps" Component={RockPaperScissorsPage} />  
            <Route path="*" Component={NotFound}/>
        </Routes>
    )
}

export default Router;
