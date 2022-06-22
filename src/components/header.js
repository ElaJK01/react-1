import React from "react";
import Navbar from "./navbar";

const Header = () => (
  <header className="header">
    <div className="header__container">
      <img src="https://picsum.photos/id/306/1000/50" alt="header-img" />
      <div className="header__title">
        <h1>My Garden</h1>
      </div>
      <Navbar />
    </div>
  </header>
);

export default Header;
