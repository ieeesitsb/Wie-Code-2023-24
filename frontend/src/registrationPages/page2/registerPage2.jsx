import React from 'react'
import { Form } from 'react-router-dom';

import '../page2/registerPage2.css'
export const RegisterPage2 = (props) => {
    return (
        <div className='domain_part2'>
            {/* <Form> */}
                <h1>Domain and Abstract 🤔</h1>
                <div className='part-1-main-container'>
                    <form >
                        <label className='label'>Domain :</label>
                        <select name="domain" id="size" required onChange={(e)=>props.setDomain(e.target.value)}>       
                            <option value="" hidden>Select</option>
                            <option value="Health Care">Healthcare</option>
                            <option value="Education">Smart Education</option>
                            <option value="Industry">Urbanization</option>
                            <option value="Industry">E-Commerce</option>
                            <option value="Industry">Fintech</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Agriculture">Environment</option>
                            <option value="Miscellaneous">Open Innovation</option></select>

                        <label className='abstract-text'> Upload File :</label>
                        <input required type="file" onChange={(e)=>props.setAbstract(e.target.files[0])}/>

                        {/* <label> Refferal Code :</label>
                        <input type="text" required /> */}
                    </form>
                </div>
            {/* </Form> */}
        </div>
    )
}
