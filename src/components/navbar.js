import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="header__navbar">
    <Link className="link navbar__btn" to="/">
      Home
    </Link>
    <Link className="link navbar__btn" to="/about">
      About
    </Link>
    <Link className="link navbar__btn" to="/contact">
      Contact
    </Link>
    <Link className="link navbar__btn" to="/teams">
      Gardening Teams
    </Link>
    <Link className="link navbar__btn" to="/players">
      Players
    </Link>
  </nav>
);

export default Navbar;
