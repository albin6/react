import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { AuthContextProvider } from "./store/AuthContext";
import Login from "./components/Login";
import ReqiuireAuth from "./components/ReqiuireAuth";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/profile"
              element={
                <ReqiuireAuth>
                  <Profile />
                </ReqiuireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
