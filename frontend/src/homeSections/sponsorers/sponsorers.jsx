import React from 'react'
import './sponsorers.css'
import NSLogo from '../../assets/images/anagha-requirments/sponsor.png'
import CSindia from '../../assets/images/sponsorer/computer society of india.png'
import WolframCorporate from '../../assets/images/sponsorer/wolfram-corporate-logo-stacked.png'
import OhCampus from '../../assets/images/sponsorer/ohCampusLogo.jpeg'
import MyFurniture from '../../assets/images/sponsorer/myFurniture.png'
import IdeaLab from '../../assets/images/sponsorer/ideaLab.png'

const logos = [NSLogo,CSindia,WolframCorporate]
const logos2 = [OhCampus,MyFurniture,IdeaLab]
function Sponsorers() {
    return (
        <div className='sponsorers-main-container'>
            <span className='sponsorers-heading'>SPONSORS</span>
            <div className='sponsorers-sub-container'>
                {logos.map((index,key) => {
                    return(
                        <div index={key} className='sponsorer-slider'>
                            <img src={index}></img>
                        </div>
                    )
                }) }
                
            </div>
            <div className='sponsorers-sub-container'>
                {logos2.map((index,key) => {
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