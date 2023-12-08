import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import HomePage from '../pages/homePage'
import AboutUs  from '../pages/aboutUs'
import DomainDesc from '../pages/domainDesc'


function Approutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/description" element={<DomainDesc />} />
        </Routes>
    </div>
  )
}

export default Approutes