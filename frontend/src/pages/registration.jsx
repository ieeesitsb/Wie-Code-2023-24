import React from 'react'
import '../css/registration.css'
import Header from '../components/header/header';
import Abstract from '../assets/files/WIE_CODE_ABSTRACT_FORMAT.docx'
import Abstract_ppt from '../assets/files/WIE_CODE_PPT_FORMAT.pptx'

function Registration() {
  return (
    <div className='content_div1 '>
      <Header />
      <h1>REGISTER </h1>
      <div  >
        <form className='create '>
          <label>
            Team Name:
          </label>
          <input type="text" required />
          <label>
            Leader Name(Must be Girl):
          </label>
          <input type="text" required />
          <label>Team Size: </label>
          <select>
            <option value="select">select</option>
            <option value="select">2</option>
            <option value="select">3</option>
            <option value="select">4</option>
          </select>
          <text>Abstract Formate(must strictly must followed)</text>
          {/* <p>CLick here to download Abstract Formate:</p> */}
          <a href={Abstract} download="Abstract.docx">CLick here to download Abstract Formate  <span>Click here</span></a>
          {/* <p>CLick here to download PPT Formate: </p> */}
          <a href={Abstract_ppt} download="PPT_formate.pptx">CLick here to download PPT Formate <span>Click here</span></a>
          <button className='a'>Abstract</button>
        </form>

      </div>

    </div>
  )
}

export default Registration