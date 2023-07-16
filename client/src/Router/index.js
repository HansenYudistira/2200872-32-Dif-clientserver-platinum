import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "../Pages/LandingPage";
import ProfilePage from "../Pages/ProfilePage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={LandingPage}/>
            <Route path="/ProfilePage" Component={ProfilePage} />
            <Route path="/registerPage" component={RegisterPage} />
            <Route path="/loginPage" component={LoginPage} />
        </Routes>
    )
}

export default Router;