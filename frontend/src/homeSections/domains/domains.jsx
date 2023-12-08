import React from 'react'
import Cards from './card/Cards'
import './domains.css'
import innovation from '../../assets/images/innovation.png'
import healthCare from '../../assets/images/healthcare.png'


import cardData from './data'; 

const domains = () => {
    return (
    <div className='card-container'>
        {cardData.map((domain) => (
        <Cards
        key = {domain.id}
        url={innovation}
        text={domain.text}
        desc={domain.desc}
        />
        ))}
    </div>
    );
};
export default domains
