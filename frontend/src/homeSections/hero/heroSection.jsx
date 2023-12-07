import React from 'react'
import '../hero/heroSection.css'
import HeroGif from '../../assets/videos/heroGif2.gif'
import EventDetails from '../../assets/images/details.svg'
import EventDetails1 from '../../assets/images/backgroundImage.svg'

function HeroSection() {
  return (
    <div>
      <div className='hero-main-container'>
        <div className='hero-text-container'>
          <span className='hero-wie-code'> WIE CODE  </span>
          <span className='hero-text-container hero-year'>  2023</span>
          <span className='hero-text-container organized-text'>Organized by IEEE SIT SB</span>
        </div>
        <div className='hero-gif-container'>
          <div className='hero-gif-sub-container'>
            <img className='hero-gif' src={HeroGif}></img>
          </div>
        </div>
      </div>
      <div className='event-details'>
      <span className='event-title'>DETAILS OF <span style={{color: "#C72039"}}> WIE</span>  CODE 2023</span> 
        <div className='event-det-first'>
          <div className='event-det-date'>
            <span className='event-heading'> Date</span>
            <span className='event-desc'>23drd December</span>
          </div>
          <div className='event-det-date'>
            <span className='event-heading'>Time</span>
            <span className='event-desc'>8am to 8pm</span>
          </div>
        </div>
        <div className='event-det-second'>
          <img src={EventDetails}></img>
        </div>
        <div className='event-det-first'>
          <div className='event-det-date-second'>
            <span className='event-heading'>Theme</span>
            <span className='event-desc'>Innovate for Impact</span>
          </div>
          <div className='event-det-date-second'>
            <span className='event-heading'>Venue</span>
            <span className='event-desc'> Siddaganga Institute of Technology</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection