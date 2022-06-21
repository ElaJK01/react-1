import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import App from "./app";
import About from "./components/about";
import Contact from "./components/contact";
import "./styles.css";
import Teams from "./components/teams";
import Players from "./components/players";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="teams" element={<Teams />} />
        <Route path="players" element={<Players />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
