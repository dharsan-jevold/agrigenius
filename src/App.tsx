import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./Home";
import Dashboard from "./Dashboard";
import Shop from "./Shop";
import About from "./About";
import Help from "./Help";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";

import "./App.css";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/@denserai/embed-chat@1/dist/web.min.js";
    script.onload = () => {
      // @ts-ignore
      window.Chatbot?.init?.({ chatbotId: "481a9580-f312-49c1-a2e2-beddd0f22d88" });
    };
    document.body.appendChild(script);
  }, [theme]);

  return (
    <Router>
      {isLoggedIn && <Navbar toggleTheme={toggleTheme} setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/shop"
          element={isLoggedIn ? <Shop /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path="/help"
          element={isLoggedIn ? <Help /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} toggleTheme={toggleTheme} />} />
        <Route path="/signup" element={<Signup toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
};

export default App;
