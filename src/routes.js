import React from "react";
import { Routes, Route, Link } from "react-router-dom";

//pages
import LoginPage from "./pages/login/index";
import HomePage from "./pages/home/index";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default MyRoutes;
