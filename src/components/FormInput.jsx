import React, { useState } from 'react'
import './forminput.css';

const FormInput = (props) => {
  const [focused , setFocused] = useState(false);
  const handleFocus = (e) =>{
    setFocused(true);
  };
  return (
    <div className="forminput">
        <label>{props.labelMessage}</label>
        <input type={props.type} name={props.name} placeholder={props.placeholder} pattern={props.patTern} value={props.value} onBlur={handleFocus} focused={focused.toString()}  />
        <span>{props.erroMessage}</span>
    </div>
  )
}

export default FormInput