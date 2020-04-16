import React from "react";
import "./navbar.scss";
import logo from "../../src/logo.png";
export default () => (
  <nav className="navbar">
    <img src={logo} alt="logo" />
    <ul className="nav-links">
      <li>
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="nav-link" href="/">
          About
        </a>
      </li>
      <li>
        <a className="nav-link active" href="/">
          Tours
        </a>
      </li>
    </ul>
  </nav>
);
