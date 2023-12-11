import React from 'react'
import './sponsorers.css'
import NSLogo from '../../assets/images/sponsorer/ns,silks.jpg'
import CSindia from '../../assets/images/sponsorer/computer society of india.png'

const logos = [NSLogo,CSindia]
function Sponsorers() {
    return (
        <div className='sponsorers-main-container'>
            <span className='sponsorers-heading'>SPONSORERS</span>
            <div className='sponsorers-sub-container'>
                {logos.map((index,key) => {
                    return(
                        <div index={key} className='sponsorer-slider'>
                            <img src={index}></img>
                        </div>
                    )
                }) }
                
            </div>
            {/* <div className='sponsorers-sub-container'>
                {logos.map((index,key) => {
                    return(
                        <div index={key} className='sponsorer-slider'>
                            <img src={index}></img>
                        </div>
                    )
                }) }
                
            </div> */}
        </div>
    )
}

export default Sponsorers