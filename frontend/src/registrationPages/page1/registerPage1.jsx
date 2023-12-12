import React from 'react'
import '../page1/registerPage1.css'

export const registerPage1 = () => {
  return (
    <div className='part1'>
    <h1>Team Details ❓</h1>
    <div className='part1_box1'>
      <div className='part1_box1_cont1'>
        <div className="part1_input-container">
        <form >
      <h3 > Team Leader: </h3>
      
        <label  className='label'>Name :</label>
        <input type="text" required/>
        <label  className='label'>Mobile :</label>
        <input type="text" required/>       
        <label  className='label'>Gender:</label>       
      <input type="text" required/>        
        <label className='label'>Email :</label>
                 <input type="text" required/>       
        <label className='label'>College :</label>
        <input type="text" required/>
        </form>
         </div>

         <div className="part1_input-container">
        <form >
      <h3> Team Member: </h3>
              <label  className='label'>Name :</label>
        <input type="text" required/>
        <label  className='label'>Mobile :</label>
        <input type="text" required/>       
        <label  className='label'>Gender :</label>       
      <input type="text" required/>        
        <label className='label'>Email :</label>
                 <input type="text" required/>       
        <label className='label'>College :</label>
        <input type="text" required/>
        </form>
         </div>
      </div>
         
     
      <div className='part1_box1_cont1'>
      <div className="part1_input-container">
        <form>
      <h3> Team Member: </h3>       
        <label  className='label'>Name :</label>
        <input type="text" required/>
        <label  className='label'>Mobile :</label>
        <input type="text" required/>       
        <label  className='label'>Gender :</label>       
      <input type="text" required/>        
        <label className='label'>Email :</label>
                 <input type="text" required/>       
        <label className='label'>College :</label>
        <input type="text" required/>
        </form>
         </div>

         <div className="part1_input-container">
        <form>
      <h3 > Team Member: </h3>
             <label  className='label'>Name :</label>
        <input type="text" required/>
        <label  className='label'>Mobile :</label>
        <input type="text" required/>       
        <label  className='label'>Gender :</label>       
      <input type="text" required/>        
        <label className='label'>Email :</label>
                 <input type="text" required/>       
        <label className='label'>College :</label>
        <input type="text" required/>
        </form>
         </div>
      </div>
      </div>
    </div>
  )
}
