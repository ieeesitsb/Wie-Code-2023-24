import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Cards.css'
import image from '../../assets/images/backgroundImage.svg'
const Cards = (props) => {
    const {key,url,text,desc,...rest} = props
    console.log(url)
    const navigate = useNavigate();

    function handleClick() {
        navigate('/description', { state: { text: text, desc: desc } });
    }

    return (
    <div className='container'>
        <div className='top'>
            <img src={url} />
        </div>
        <div className='content'>
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
