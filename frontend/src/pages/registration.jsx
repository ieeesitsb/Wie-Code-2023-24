import React from 'react'
import '../css/registration.css'
import Header from '../components/header/header';

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
          <p>CLick here to download Abstract Formate:</p><a href="../assets/files/WIE CODE ABSTRACT FORMAT.docx" download="Abstract.docx">Click here</a>
          <p>CLick here to download PPT Formate: </p><a href="../assets/files/WIE CODE PPT FORMAT.pptx" download="PPT_formate.pptx">Click here</a>
          <button className='a'>Abstract</button>
        </form>

      </div>

    </div>
  )
}

export default Registration