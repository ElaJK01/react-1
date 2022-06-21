import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import App from "./app";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./styles.css";
import Teams from "./pages/teams";
import Players from "./pages/players";
import Layout from "./components/layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="teams" element={<Teams />} />
          <Route path="players" element={<Players />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
