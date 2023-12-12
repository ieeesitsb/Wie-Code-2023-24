import React from 'react'
import '../page2/registerPage2.css'
export const registerPage2 = () => {
  return (
     <div className='domain_part2'>
    <h1>Domain and Abstract 🤔</h1>
    <div className='part-1-main-container'>
    <form >
      <label className='label'>Domain :</label>
            <select>          <option value="" hidden>Select</option>
        <option value="Health Care">Healthcare</option>
        <option value="Education">Smart Education</option>
        <option value="Industry">Urbanization</option>
        <option value="Industry">E-Commerce</option>
        <option value="Industry">Fintech</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Agriculture">Environment</option>
        <option value="Miscellaneous">Open Innovation</option></select>

      <label className='abstract-text'> Upload File :</label>
      <input type="text" required />

      <label> Refferal Code :</label>
      <input type="text" required />
    </form>
    </div>
  </div>
  )
}
