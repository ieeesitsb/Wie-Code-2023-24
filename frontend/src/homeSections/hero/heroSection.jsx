import React from 'react'
import '../hero/heroSection.css'
import HeroGif from '../../assets/videos/heroGif2.gif'
import EventDetails from '../../assets/images/details.svg'
import EventDetails1 from '../../assets/images/backgroundImage.svg'
import IdeaImage from '../../assets/images/idea.png'
import HeroBgGif from '../../assets/videos/bgHeroGif.gif'

function HeroSection() {
  return (
    <div>
      <div className='hero-main-container'>
        <div className='hero-text-container'>
          <span className='hero-text-container hero-wie-code' data-attr="&nbsp;WIE CODE&nbsp;"><span>&nbsp;WIE CODE &nbsp;</span>  </span>
          <span className='hero-text-container hero-year' data-info="&nbsp;2023&nbsp;"><span>&nbsp; 2023 &nbsp;</span> </span>
          <span className='hero-text-container organized-text' ><span>&nbsp;Organized by IEEE SIT SB&nbsp;</span> </span>
        </div>
        <div className='hero-gif-container'>
          <div className='hero-gif-sub-container'>
            {/* <img className='hero-gif' src={HeroGif}></img> */}
            <img className='hero-gif' src={HeroBgGif}></img>
          </div>
        </div>
      </div>


{/* Theme of hackathon */}
        <div className='idea'>
          <div className='idea-img-container'>
            <img src={IdeaImage}></img>
          </div>
          <div className='idea-text-container'>
            <span className='idea-theme-title'>THEME</span>
            <span className='idea-theme-desc'>Unleash your creativity for a purpose! This year's hackathon theme is </span>
            <span className='idea-theme'>INNOVATE FOR IMPACT</span>
          </div>
        </div>


{/* Details of the event  */}
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