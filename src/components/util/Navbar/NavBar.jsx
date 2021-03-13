import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="./hev-logo.png" alt="logo" />
        </div>
        <div className="nav-title">
          <h1>Healthcare Excellence Ventures</h1>
        </div>
        <div>
          <ul className="nav-links">
            <li className="nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/order">Order</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul> 
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
