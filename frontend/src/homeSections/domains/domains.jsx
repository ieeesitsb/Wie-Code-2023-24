import React from 'react'
import Cards from './Cards'
import './domains.css'
import test from '../../assets/images/eight.png'
import cardData from './data'; 

const Domains = () => {
    return (
    <div className='card-container'>
        {cardData.map((domain) => (
        <Cards
        key = {domain.id}
        url={test}
        text={domain.text}
        desc={domain.desc}
        />
        ))}
    </div>
    );
};
export default Domains
