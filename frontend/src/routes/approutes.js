import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage'
import AboutUs  from '../pages/aboutUs'
import DomainDesc from '../pages/domainDesc'
import ContactUs from '../pages/contactUs'
import Registration from '../pages/registration'
import RegisterMainPage from '../pages/registerMainPage';


function Approutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/description" element={<DomainDesc />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path = "/register" element={<RegisterMainPage/>}/>
        </Routes>
    </div>
  )
}

export default Approutes