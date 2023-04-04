import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

import { signupService } from "../src/services/auth.services";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="page">
      <header>
        <h1 style={{ color: "#fff" }}>Test Case</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="*" element={<NotFound />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </header>
      <main></main>
    </div>
  );
}

export default App;
