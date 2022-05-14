import React from 'react'
import "./Modal.css";

import Login from '../Core/Login/Login'
import Signup from '../Core/Signup/Signup'
import ForgotPassword from '../Core/ForgotPassword/ForgotPassword';

function Modal() {
  return (
    <div className={"modal-bg"}>
        <div className={"modal-body"}>


            
            {/* <Login /> */}
            <Signup />
            {/* <ForgotPassword /> */}



        </div>
    </div>
    
  )
}

export default Modal

