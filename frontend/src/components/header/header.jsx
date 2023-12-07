import React, { useEffect } from 'react';
import '../header/header.css';

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
      {/* Header */} 
      <header className="header">
        <nav className="navbar">
            <a href="#" className="nav-logo">WebDev.</a>
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
      </header>
    </div>
  );
}

export default Header;


// import React, { useEffect } from 'react';
// import '../header/header.css';

// function Header() {
  
//   useEffect(() => {
//     const hamburger = document.querySelector(".hamburger");
//     const navMenu = document.querySelector(".nav-menu");

//     const mobileMenu = () => {
//       hamburger.classList.toggle("active");
//       navMenu.classList.toggle("active");
//     };

//     hamburger.addEventListener("click", mobileMenu);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       hamburger.removeEventListener("click", mobileMenu);
//     };
//   }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

//   return (
//     <div className='header-main-container'>
//       {/* Header */} 
//       <header className="header">
//         <nav className="navbar">
//             <a href="#" className="nav-logo">WebDev.</a>
//             <ul className="nav-menu">
//                 <li className="nav-item">
//                     <a href="#" className="nav-link">Home</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link">Registration</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link">About Us</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link">Contact Us</a>
//                 </li>
//             </ul>
//             <div className="hamburger">
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//             </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Header;