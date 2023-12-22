import React from 'react';
import '../css/contactUs.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer'
import illustration from '../assets/videos/contactus.gif'


function contactUs() {
  return (
    // <div className='outer-container'>
    //   <Header />
    //   <div className='container-one'>
    //     <div className='container-one-left'>
    //       <div className='container-one-input'>
    //         <input className='first-input' type="text" id="fullName" placeholder="Enter your full name"></input>
    //         <input className='second-input' type="text" id="email" placeholder="Enter your email"></input>
    //       </div>
    //       <div className='input-text-area'>
    //         <textarea className='message-area' id="message" placeholder="Type your message"></textarea>
    //       </div>
    //       <button className='sub-btn'>Submit</button>
    //     </div>
    //     <div className='container-one-right'>
    //       <div className='heading-span'><span className='contact-heading'>Contact</span><span className='us'>Us</span></div>
    //       <div className='illustration'><img src={illustration} alt="" /></div>
    //     </div>
    //   </div>
    //   <div className='contact-container'>
    //     <div className='wie-logo'> <img src={image} alt="" /></div>
    //     <div className='contact-name'>
    //       <span>Kona Chandra Kiran</span>
    //       <span>IEEE Chairman</span>
    //       <span>9989794662</span>
    //     </div>
    //     <div className='contact-name'>
    //       <span>Adarsh Reddy P </span>
    //       <span>IEEE Vice Chairman</span>
    //       <span>9591488158</span>
    //     </div>
    //     <div className='contact-name'>
    //       <span>Chandana R</span>
    //       <span>Wie chairman</span>
    //       <span>7975720929</span>
    //     </div>
    //     <div className='contact-name'>
    //       <span>Nanditha B U</span>
    //       <span>Wie Vice Chairman</span>
    //       <span>9591619331</span>
    //     </div>
    //   </div>
    //   {/* <Footer /> */}
    // </div>



    // 
    <div className='contact-main-container'>
      <Header />
      <div className='contact-middle-container'>
        <div className='middle-left'>
          <div className='input-one'>
            <input className='first-input' type="text" id="fullName" placeholder="Enter your full name"></input>
          </div>
          <div className='input-two'>
            <input className='second-input' type="text" id="email" placeholder="Enter your email"></input>
          </div>
          <div className='textarea-one'>
            <textarea className='message-area' id="message" placeholder="Type your message"></textarea>
          </div>
          <div className='submit-btn'>
            <button>Submit</button>
          </div>
        </div>
        <div className='middle-right'>
          <div className='heading-span'>
            <span>CONTACT US</span>
          </div>
          <div className='image-div'>
            <img className='right-image' src={illustration} alt="" />

          </div>
        </div>
      </div>
      <div className='contact-section'>
        <div className='name1'>
          <span className='namess'>Kona Chandra Kiran</span>
          <span className='designation'>IEEE Chairman</span>
          <span className='contact-number'>9989794662</span>
        </div>
        <div className='name2'>
          <span className='namess'>Adarsh Reddy P </span>
          <span className='designation'>IEEE Vice Chairman</span>
          <span className='contact-number'>9591488158</span>
        </div>
        <div className='name3'>
          <span className='namess'>Chandana R</span>
          <span className='designation'>WIE Chairman</span>
          <span className='contact-number'>7975720929</span>
        </div>
        <div className='name4'>
          <span className='namess'>Nanditha B U</span>
          <span className='designation'>WIE Vice Chairman</span>
          <span className='contact-number'>9591619331</span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default contactUs

