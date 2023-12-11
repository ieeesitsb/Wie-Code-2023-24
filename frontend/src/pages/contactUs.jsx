import React from 'react';
import '../css/contactUs.css';
import Header from '../components/header/header';
import image from '../assets/images/WIELogo-removebg-preview.png'
import Footer from '../components/footer/footer'
import illustration from '../assets/images/contact.svg'


function contactUs() {
  return (
    <div className='outer-container'>
      <Header />
      <div className='container-one'>
        <div className='container-one-left'>
          <input className='first-input' type="text" id="fullName" placeholder="Enter your full name"></input>
          <input className='second-input' type="text" id="email" placeholder="Enter your email"></input>
          <textarea className='message-area' id="message" placeholder="Type your message"></textarea>
          <button className='sub-btn'>Submit</button>
        </div>
        <div className='container-one-right'>
          <div className='heading-span'><span className='contact-heading'>Contact</span><span className='us'>Us</span></div>
          <div className='illustration'><img src={illustration} alt="" /></div>
        </div>
      </div>
      <div className='contact-container'>
        <div className='wie-logo'> <img src={image} alt="" /></div>
        <div className='contact-name'>
          <span>Kona Chandra Kiran</span>
          <span>IEEE Chairman</span>
          <span>9989794662</span>
        </div>
        <div className='contact-name'>
          <span>Adarsh Reddy P </span>
          <span>IEEE Vice Chairman</span>
          <span>9591488158</span>
        </div>
        <div className='contact-name'>
          <span>Chandana R</span>
          <span>Wie chairman</span>
          <span>7975720929</span>
        </div>
        <div className='contact-name'>
          <span>Nanditha B U</span>
          <span>Wie Vice Chairman</span>
          <span>9591619331</span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default contactUs

