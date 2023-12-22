import React from 'react'
import { Form } from 'react-router-dom';

import '../page2/registerPage2.css'
import Header from '../../components/header/header';
export const RegisterPage2 = (props) => {
    return (
        <div className='domain_part2'>
            <Header/>
            {/* <Form> */}
                <h1>Domain and Abstract </h1>
                <div className='part-1-main-container'>
                    <form >
                        <label className='label'>Domain :</label>
                        <select name="domain" id="size" required onChange={(e)=>props.setDomain(e.target.value)}>       
                            <option value="" hidden>Select</option>
                            <option value="Smart-City-and-Urban-Innovation">Smart City and Urban Innovation</option>
                            <option value="Health-Care<">Health Care</option>
                            <option value="Environment">Environment</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Economic-Development">Economic Development</option>
                            <option value="Society-and-Communityure">Society and Community</option>
                            <option value="Education">Education</option>
                            <option value="Open-Innovation">Open Innovation</option></select>

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
