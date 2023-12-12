import React from 'react';
import '../css/contactUs.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer'
import illustration from '../assets/images/desc-bg.png'


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



    <div className='outside-container'>
      <Header />
      <div className='center-container'>
        <div className='main-heading'>
          <span>CONTACT US</span>
        </div>
        <div className='middle-container'>
          <div className='middle-container-left'>
            <div className='input-area'>
              <div className='input-one'><input className='input-one-text' type="text" id="fullName" placeholder="Enter your full name"></input></div>
              <div className='input-two'><input className='input-two-text' type="text" id="fullName" placeholder="Enter your gmail"></input></div>
            </div>
            <div className='message-area'>
              <textarea className='message-area-text' id="message" placeholder="Type your message"></textarea>
            </div>
            <div className='submit-btn'>
              <button className='submit-btn-text'>Submit</button>
            </div>
          </div>
          <div className='middle-container-right'>
            <img src={illustration} alt="" />
          </div>
        </div>
        <div className='contact-container'>
          <div className='name1'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='name2'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='name3'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='name4'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default contactUs

