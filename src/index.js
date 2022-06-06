import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from 'components/home';
import About from "./components/about";
import Contact from "./components/contact";


const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
);