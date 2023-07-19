import React from "react";
import { Routes, Route } from "react-router-dom";


// Pages
import LandingPage from "../Pages/LandingPage";
import ProfilePage from "../Pages/ProfilePage";
import Community from "../Pages/Community";
import GameListPage from "../Pages/GameListPage";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={LandingPage}/>
            <Route path="/Community" Component={Community} />
            <Route path="/GameList" Component={GameListPage} />
            <Route path="/profilePage" Component={ProfilePage} />
        </Routes>
    )
}

export default Router;