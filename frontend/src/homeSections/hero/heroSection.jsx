import React from 'react'
import '../hero/heroSection.css'
import HeroGif from '../../assets/videos/heroGif2.gif'
function HeroSection() {
  return (
    <div className='hero-main-container'>
        <div className='hero-text-container'>

        </div>
        <div className='hero-gif-container'>
            <div className='hero-gif-sub-container'>
                <img className='hero-gif' src={HeroGif}></img>

            </div>
        </div>

    </div>
  )
}

export default HeroSection