import React, { useEffect } from 'react';
import '../header/header.css';
import ieeelogo from '../../assets/images/IEEE-WHITE.png';
import ieeeblrLogo from '../../assets/images/ieee-blr.png';
import wieLogo from '../../assets/images/WIELogo-removebg-preview.png';

function Header() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    const mobileMenu = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    const closeMenu = () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    };

    hamburger.addEventListener("click", mobileMenu);

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    // Cleanup the event listeners when the component unmounts
    return () => {
      hamburger.removeEventListener("click", mobileMenu);
      navLink.forEach(n => n.removeEventListener("click", closeMenu));
    };
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div className='header-main-container'>
      <nav className="navbar">
        <div className="three-logo">
          <div><img src={ieeelogo} alt="IEEE Logo" className="ieee-logo" /></div>
          <div><img src={ieeeblrLogo} alt="IEEE BLR Logo" className="ieeeblr-logo" /></div>
          <div><img src={wieLogo} alt="WIE Logo" className="wie-logo" /></div>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Registration</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact Us</a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
