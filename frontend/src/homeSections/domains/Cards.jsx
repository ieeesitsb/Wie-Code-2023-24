import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Cards.css'

const Cards = (props) => {
    const {key,url,text,desc,...rest} = props
    console.log(url)
    const navigate = useNavigate();

    function handleClick() {
        navigate('/description', { state: { text: text, desc: desc } });
    }

    return (
    <div className='card-container'>
        <div className='card-top'>
            <img className="dom-img" src={`./domain-images/${url}`}  />
        </div>
        <div className='card-content'>
            <h2>{text}</h2>
            <button 
            className='expl-btn'
            onClick={handleClick}
            >Explore</button>
        </div>
    </div>
    )
}

export default Cards
