import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import HomePage from '../pages/homePage'
function Approutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    </div>
  )
}

export default Approutes