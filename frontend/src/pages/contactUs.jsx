import React from 'react';
import '../css/contactUs.css';
import Header from '../components/header/header';
import image from '../assets/images/WIELogo-removebg-preview.png'


function contactUs() {
  return (
    <div className='main'>
      <Header/>
      <div className='mid-section'>
        <div className='left'>
          
            {/* <div className='labels'>
              <label className='label1' >
                <input placeholder='Full name' type="text" />
              </label>
              <label className='label2' placeholder='Email'>
                <input placeholder='Email' type="text" />
              </label>
            </div> 
            <div className='textareaa'>
              <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
            </div> */}
        </div>
        <div className='right'>
          <div className='heading-part'>
             <span className='heading-span1'> Contact</span><span className='heading-span'> Us</span>
          </div>
          <div className='content-span'>
             <span className='inside-span'>I can't explain I got a feeling that I just I can't erase Just a feeling that I won't Won't leave behind Because it's something that is on It's on my mind</span>
             <span className='inside-span'>Would you like to know more about our services or how we can help your business?</span>
             <span className='inside-span'>Fien', fien', fien', fien'-fien' (Yeah)Fien', fien', fien', fien'-fien' (Yeah)Fien', fien', fien', fien'-fien'Fien', fien'(Yeah), fien', fien', fien'</span>
          </div>
        </div>
      </div>
      <div className='footer-part'>
        <div className='fl'>
          <div className='logo'>
            <img src={image} alt="" />
          </div>
         <div className='names'>
          <div className='name'>
            <span>Name1</span>
            <span>Other info</span>
            <span>Number</span>
          </div>
          <div className='name'>
            <span>Name1</span>
            <span>Other info</span>
            <span>Number</span>
          </div>
          <div className='name'>
            <span>Name1</span>
            <span>Other info</span>
            <span>Number</span>
          </div>
          <div className='name'>
            <span>Name1</span>
            <span>Other info</span>
            <span>Number</span>
          </div>
         </div>
        </div>  
      </div>
      
    </div>
  )
}

export default contactUs

