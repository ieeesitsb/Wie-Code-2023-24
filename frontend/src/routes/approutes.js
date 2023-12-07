import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import HomePage from '../pages/homePage'
import AboutUs  from '../pages/aboutUs'
function Approutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
    </div>
  )
}

export default Approutes