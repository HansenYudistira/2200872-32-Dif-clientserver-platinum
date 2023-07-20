import React from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT PAGES
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import NotFound from "../Pages/NotFound";

function Router() {
    return (
        <Routes>
            <Route path="/register" Component={RegisterPage}/>
            <Route path="/login" Component={LoginPage}/>
            <Route path="*" Component={NotFound}/>
        </Routes>
    )
}

export default Router;