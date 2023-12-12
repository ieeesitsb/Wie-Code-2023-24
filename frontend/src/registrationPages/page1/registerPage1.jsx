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
                                <input name='gen' type="text" value={"Female"} disabled={true} style={{ color: "#ffffff" }}/>
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
                                <input name='name' type="text" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], {...props.teamDetails[1], "m1Name":e.target.value},props.teamDetails[2], props.teamDetails[3]])}}/>
                                <label className='label'>Mobile :</label>
                                <input name='mob' type="text" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], {...props.teamDetails[1], "m1Mobile":e.target.value},props.teamDetails[2], props.teamDetails[3]])}}/>
                                <label className='label'>Gender :</label>
                                <input name='gen' type="text" defaultValue={(user.teamSize==="2" || user.teamSize==="4")?"Female":""} disabled={(user.teamSize==="2" || user.teamSize==="4")?true:false} style={ user.teamSize ==='2' ? { color: "#ffffff" } : {}}/>
                                <label className='label'>Email :</label>
                                <input name='email' type="email" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], {...props.teamDetails[1], "m1Email":e.target.value},props.teamDetails[2], props.teamDetails[3]])}}/>
                                <label className='label'>College :</label>
                                <input name='college' type="text" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], {...props.teamDetails[1], "m1Clg":e.target.value},props.teamDetails[2], props.teamDetails[3]])}}/>
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
                                    <input type="text" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], {...props.teamDetails[2], "m2Name":e.target.value}, props.teamDetails[3]])}}/>
                                    <label className='label'>Mobile :</label>
                                    <input name='mob' type="text" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], {...props.teamDetails[2], "m2Mobile":e.target.value}, props.teamDetails[3]])}}/>
                                    <label className='label'>Gender :</label>
                                    <input name='gen' type="text" required />
                                    <label className='label'>Email :</label>
                                    <input name='email' type="email" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1],  {...props.teamDetails[2], "m2Email":e.target.value}, props.teamDetails[3]])}}/>
                                    <label className='label'>College :</label>
                                    <input name='college' type="text" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1],{...props.teamDetails[2], "m2Clg":e.target.value}, props.teamDetails[3]])}}/>
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
                                    <input type="text" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], props.teamDetails[2], {...props.teamDetails[3], "m3Name":e.target.value}])}}/>
                                    <label className='label'>Mobile :</label>
                                    <input name='mob' type="text" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], props.teamDetails[2], {...props.teamDetails[3], "m3Mobile":e.target.value}])}}/>
                                    <label className='label'>Gender :</label>
                                    <input name='gen' type="text" required />
                                    <label className='label'>Email :</label>
                                    <input name='email' type="email" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], props.teamDetails[2], {...props.teamDetails[3], "m3Email":e.target.value}])}}/>
                                    <label className='label'>College :</label>
                                    <input name='college' type="text" required onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], props.teamDetails[2], {...props.teamDetails[3], "m3Clg":e.target.value}])}}/>
                                </form>
                            {/* </Form> */}
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}
