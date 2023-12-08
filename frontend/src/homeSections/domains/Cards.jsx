import React from 'react'
import './Cards.css'

const Cards = (props) => {

    return (
    <div className='container'>
        <div className='top'>
            <img src={props.url} />
        </div>
        <div className='content'>
            <h2>{props.text}</h2>
            <button 
            className='expl-btn'
            >Explore</button>
        </div>
    </div>
    )
}

export default Cards
