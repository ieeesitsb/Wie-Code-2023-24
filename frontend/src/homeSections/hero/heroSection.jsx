import React from 'react'
import { useEffect } from 'react'
import '../hero/heroSection.css'
import HeroGif from '../../assets/videos/heroGif2.gif'
import EventDetails from '../../assets/images/details.svg'
// import EventDetails1 from '../../assets/images/eventdetailslogo.png'
import EventDetails2 from '../../assets/images/1.png'
import IdeaImage from '../../assets/images/idea.png'
import HeroBgGif from '../../assets/videos/bgHeroGif.gif'
import GlobeGif from '../../assets/videos/globe.gif'
import EventLogo from '../../assets/images/anagha/event_details_logo_1.png'
import DetailsLogo from '../../assets/images/anagha/3.png'
import ThemeImage from '../../assets/images/anagha/pakka.jpg'
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Aos from 'aos'
import 'aos/dist/aos.css'
function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
}, []);
  return (
    <div>
      <div className='hero-main-container'>
        <div className='hero-text-container'>
          <span className='hero-text-container organized-text' ><span>&nbsp;IEEE SIT SB presents&nbsp;</span> </span>
          <span className='hero-text-container hero-wie-code' data-attr="&nbsp;WIE CODE&nbsp;"><span>&nbsp;WIE CODE &nbsp;</span>  </span>
          <span className='hero-text-container hero-year' data-info="&nbsp;2023&nbsp;"><span>&nbsp; 2023-24 &nbsp;</span> </span>
          {/* <span className='hero-text-container organized-text' ><span>&nbsp;Organized by IEEE SIT SB&nbsp;</span> </span> */}

        </div>
        <div className='hero-gif-container'>
          <div className='hero-gif-sub-container'>
            {/* <img className='hero-gif' src={HeroGif}></img> */}
            <img className='hero-gif' src={GlobeGif}></img>
          </div>
        </div>
      </div>


      {/* Theme of hackathon */}
      <div className='idea' >
      <Fade left>

        <div className='idea-img-container'>
          {/* <img src={IdeaImage}></img> */}
          {/* <img src={DetailsLogo}/> */}
          <img src={ThemeImage} />

        </div>
        </Fade>
        <div className='idea-text-container'>
          <Fade right>
          <span className='idea-theme-title'>THEME</span>
          <span className='idea-theme-desc'>Unleash your creativity for a purpose! This year's hackathon theme is </span>
          <span className='idea-theme'>"INNOVATE FOR IMPACT"</span>
          </Fade>
        </div>
      </div>

      {/* Details of the event  */}

      <div className='event-details' data-aos = "zoom-in">
      {/* <Pulse> */}
        <span className='event-title'>DETAILS OF <span style={{ color: "#00F2FF" }}> WIE</span>  CODE 2023-24</span>
        <div className='event-det-first'>
          <div className='event-det-date'>
            <span className='event-heading'> Date</span>
            <span className='event-desc'>23rd December , 2023</span>
          </div>
          <div className='event-det-date'>
            <span className='event-heading'>Time</span>
            <span className='event-desc'>8:00 A.M to 8:00 P.M</span>
          </div>
        </div>
        <div className='event-det-second'>
          {/* <img src={EventDetails2}></img> */}
          <img src={EventLogo}></img>

        </div>
        <div className='event-det-first'>
          <div className='event-det-date-second'>
            <span className='event-heading'>Theme</span>
            <span className='event-desc'>Innovate for Impact</span>
          </div>
          <div className='event-det-date-second'>
            <span className='event-heading'>Venue</span>
            <span className='event-desc'> Siddaganga Institute of Technology,Tumakuru</span>
          </div>
        </div>
      {/* </Pulse> */}
      </div>
    </div>
  )
}

export default HeroSection