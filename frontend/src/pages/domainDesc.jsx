import React from 'react'
import '../css/domainDesc.css'
import { useLocation } from 'react-router-dom'
import Header from '../components/header/header';
import im from '../assets/images/desc-bg.png'

const DomainDesc = () => {
  const location = useLocation();
  const { text, desc } = location.state || {};

    return (
    <>
      <Header />
      <div className='main-container'>
        <div className='mini-desc-container'>
          <div className='text-container'>
            <div className='text-mini-container'>
            <h1>{text}</h1>
            <p>{desc}</p>
            </div>
          </div>
          <div className='desc-img'>
            <img className="imaage"src={im}/>
          </div>  
        </div>
      </div>
    </>
  )
}

export default DomainDesc
