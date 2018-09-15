import React from "react";
import Link from "gatsby-link";
import logo from "../images/logo-cactus.svg";
import "./header.css";

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img width="50" src={logo} />
      </Link>
      <Link to="/courses">About Us</Link>
      <Link to="/downloads">Services</Link>
      <Link to="/workshops">Pricing</Link>
      <Link to="/buy">
        <button className="Header-btn">Contact</button>
      </Link>
    </div>
  </div>
);

export default Header;
