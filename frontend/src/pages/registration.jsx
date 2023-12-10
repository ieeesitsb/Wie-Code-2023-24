import React from 'react'
import '../css/registration.css'
import Header from '../components/header/header';

function Registration() {
  return (
    <div className='content_div1  '>
        <Header/>
      <h1>REGISTER </h1>
      <div  >
      <form className='create '>
        <label>
          Team Name:
        </label>
        <input type="text" required/>
        
        <label>Team Size: </label>
        <select>
          <option value="select">select</option>
          <option value="select">2</option>
          <option value="select">3</option>
          <option value="select">4</option>
        </select>
        <text>Abstract Formate(must strictly must followed)</text>
        
        <button className='a'>Abstract</button>
      </form>
     
    </div>
     
    </div>
  )
}

export default Registration