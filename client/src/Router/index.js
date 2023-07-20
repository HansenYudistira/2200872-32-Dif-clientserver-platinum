import React from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT PAGES
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
<<<<<<< HEAD
import NotFound from "../Pages/NotFound";
=======
import Community from "../Pages/Community";
import GameListPage from "../Pages/GameListPage";
import AboutUs from "../Pages/AboutUs";
import RockPaperScissorsPage from "../Pages/RockPaperScissorsPage";
>>>>>>> 5ab59f566bbf55895d66ffcc7447b01817de4aff

function Router() {
    return (
        <Routes>
<<<<<<< HEAD
            <Route path="/register" Component={RegisterPage}/>
            <Route path="/login" Component={LoginPage}/>
            <Route path="*" Component={NotFound}/>
=======
            <Route path="/" Component={LandingPage}/>
            <Route path="/profilePage" Component={ProfilePage} />
            <Route path="/registerPage" Component={RegisterPage} />
            <Route path="/loginPage" Component={LoginPage} />
            <Route path="/community" Component={Community} />
            <Route path="/gamelist" Component={GameListPage} />
            <Route path="/About-us" Component={AboutUs} />  
            <Route path="/rps" Component={RockPaperScissorsPage} />  
>>>>>>> 5ab59f566bbf55895d66ffcc7447b01817de4aff
        </Routes>
    )
}

export default Router;
