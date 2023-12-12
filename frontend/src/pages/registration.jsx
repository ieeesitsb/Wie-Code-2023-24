import React, { useEffect } from 'react'
import '../css/registration.css'
import Header from '../components/header/header';
import Abstract from '../assets/files/WIE_CODE_ABSTRACT_FORMAT.docx'
import Abstract_ppt from '../assets/files/WIE_CODE_PPT_FORMAT.pptx'
import { Form } from 'react-router-dom';

function Registration(props) {

  const handleClickNext = () => {

  }
  useEffect(() => {
    props.setTeamSize(0);
    props.setTeamName("");
  }, []);
  return (
    <div className='content_div1 '>
      <Header />
      {/* <Form> */}
        <h1>REGISTER </h1>
        <div  >
          <form className='create '>
            <label>
              Team Name:
            </label>
            <input type="text" required onChange={(e) => {props.setTeamName(e.target.value)}}/>
            <label>
              Team Leader(*Must be a woman candidate):
            </label>
            <input type="text" required />
            <label>Team Size: </label>
            <select name="size" id="size" onChange={(e) => props.setTeamSize(e.target.value)}>
              <option value="">select</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
            <text>Abstract Format(to be followed strictly)</text>
            <a href={Abstract} download="Abstract.docx">CLick here to download Abstract Format  <span>Click here</span></a>
            <a href={Abstract_ppt} download="PPT_formate.pptx">CLick here to download PPT Format  <span>Click here</span></a>
            {/* <button className='a' onClick={handleClickNext()}>Next</button> */}
          </form>

        </div>
      {/* </Form> */}

    </div>
  )
}

export default Registration