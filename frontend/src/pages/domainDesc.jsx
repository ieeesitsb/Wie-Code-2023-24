import React from 'react'
import '../css/domainDesc.css'
import { useLocation } from 'react-router-dom'
import Header from '../components/header/header';
import Desgif from '../assets/images/smm_panel.svg'

const DomainDesc = () => {
  const location = useLocation();
  const { text, desc } = location.state || {};

    return (
    <>
      <Header />
      <div className='main-container'>
        <div className='text-container'>
          <h1>{text}</h1>
          <p>{desc}</p>
        </div>
        <img className="imaage"src={Desgif} />
      </div>
    </>
  )
}

export default DomainDesc
