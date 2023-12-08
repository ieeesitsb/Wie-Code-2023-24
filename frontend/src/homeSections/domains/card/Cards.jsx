import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Cards.css'

const Cards = (props) => {

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/desc/${props.desc}`);
    }

    return (
    <div className='container'>
        <div className='top'>
            <img src={props.url} />
        </div>
        <div className='content'>
            <h2>{props.text}</h2>
            <button 
            className='expl-btn'
            onClick={() => handleClick()}
            >Explore</button>
        </div>
    </div>
    )
}

export default Cards
