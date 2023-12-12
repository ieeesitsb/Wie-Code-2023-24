import React, { useContext, useEffect } from 'react'
import { Form } from 'react-router-dom';
import userContext from "../../utils/context";
import '../page1/registerPage1.css'

export const RegisterPage1 = (props) => {
    const user = useContext(userContext);
    useEffect(() => {
        props.setTeamDetails([])
    }, [])
    return (
        <div className='part1'>
            <h1>Team Details ❓</h1>
            <div className='part1_box1'>
                <div className='part1_box1_cont1'>
                    <div className="part1_input-container">
                        {/* <Form> */}
                            <form >
                                <h3 > Team Leader: </h3>

                                <label className='label'>Name :</label>
                                <input name='name' type="text" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadName":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}} />
                                <label className='label'>Mobile :</label>
                                <input name='mob' type="text" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadMobile":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}} />
                                <label className='label'>Gender:</label>
                                <input name='gen' type="text" value={"Female"} disabled={true}/>
                                <label className='label'>Email :</label>
                                <input name='email' type="email" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadEmail":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
                                <label className='label'>College :</label>
                                <input name='college' type="text" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadClg":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
                            </form>
                        {/* </Form> */}
                    </div>

                    <div className="part1_input-container">
                        {/* <Form> */}

                            <form >
                                <h3> Team Member-1: </h3>
                                <label className='label'>Name :</label>
                                <input name='name' type="text" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadName":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}} />
                                <label className='label'>Mobile :</label>
                                <input name='mob' type="text" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadMobile":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}} />
                                <label className='label'>Gender :</label>
                                <input name='gen' type="text" value={"Female"} disabled={true}/>
                                <label className='label'>Email :</label>
                                <input name='email' type="email" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadEmail":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
                                <label className='label'>College :</label>
                                <input name='college' type="text" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadClg":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
                            </form>
                        {/* </Form> */}
                    </div>
                </div>

                <div className='part1_box1_cont1'>
                    {
                        user.teamSize > 2 &&
                        <div className="part1_input-container">
                            {/* <Form> */}

                                <form>
                                    <h3> Team Member2: </h3>
                                    <label className='label'>Name :</label>
                                    <input type="text" required />
                                    <label className='label'>Mobile :</label>
                                    <input name='mob' type="text" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadMobile":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}} />
                                    <label className='label'>Gender :</label>
                                    <input name='gen' type="text" required />
                                    <label className='label'>Email :</label>
                                    <input name='email' type="email" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadEmail":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
                                    <label className='label'>College :</label>
                                    <input name='college' type="text" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadClg":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
                                </form>
                            {/* </Form> */}
                        </div>
                    }
                    {

                        user.teamSize > 3 &&
                        <div className="part1_input-container">
                            {/* <Form> */}

                                <form>
                                    <h3 > Team Member3: </h3>
                                    <label className='label'>Name :</label>
                                    <input type="text" required />
                                    <label className='label'>Mobile :</label>
                                    <input name='mob' type="text" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadMobile":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}} />
                                    <label className='label'>Gender :</label>
                                    <input name='gen' type="text" required />
                                    <label className='label'>Email :</label>
                                    <input name='email' type="email" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadEmail":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
                                    <label className='label'>College :</label>
                                    <input name='college' type="text" required onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadClg":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
                                </form>
                            {/* </Form> */}
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}
