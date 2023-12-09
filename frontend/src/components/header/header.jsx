// Header.jsx

import React from "react";
import "../header/header.css";
import ieeelogo from "../../assets/images/IEEE-WHITE.png";
import ieeeblrLogo from "../../assets/images/ieee-blr.png";
import wieLogo from "../../assets/images/WIELogo-removebg-preview.png";
import { Link } from "react-router-dom";

function Header() {
  const mobileMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  };

  const closeMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="three-logo">
          <div className="three-logo-container">
            <div className="logo-sub">
              <img src={ieeelogo} alt="IEEE Logo" className="ieee-logo" />
            </div>
          </div>
          <div className="three-logo-container">
            <div className="logo-sub">
              <img
                src={ieeeblrLogo}
                alt="IEEE BLR Logo"
                className="ieeeblr-logo"
              />
            </div>
          </div>
          <div className="three-logo-container">
            <div className="logo-sub">
              <div className="logo-wie">
                <img src={wieLogo} alt="WIE Logo" className="wie-logo" />
              </div>
            </div>
          </div>
        </div>
        {/* <a href="#" className="nav-logo">WebDev.</a> */}
        <div className="link-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

