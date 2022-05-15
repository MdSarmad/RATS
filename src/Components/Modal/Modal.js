import React, {useContext} from 'react';
import RatsContext from '../../Context/RatsContext';
import "./Modal.css";

import Login from '../Core/Login/Login'
import Signup from '../Core/Signup/Signup'
import ForgotPassword from '../Core/ForgotPassword/ForgotPassword';

function Modal() {
  const {signedIn, loginPopup, signUpPopup, forgotPasswordPopup} = useContext(RatsContext);
  return (
    <div className={"modal-bg"}>
        <div className={"modal-body"}>            
            {(!signedIn && loginPopup) ? <Login  />: signUpPopup? <Signup/>: forgotPasswordPopup? <ForgotPassword/> : <Login/>}
            {/* <ForgotPassword /> */}
        </div>
    </div>
    
  )
}

export default Modal

