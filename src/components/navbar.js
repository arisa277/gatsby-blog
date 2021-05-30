import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar_ul">
        <li className="navbar_li">
          <Link to="/">HOME</Link>
        </li>
        <li className="navbar_li">
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;