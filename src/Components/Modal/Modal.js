import React from 'react'
import "./Modal.css";

import Login from '../Core/Login/Login'
import Signup from '../Core/Signup/Signup'
import ForgotPassword from '../Core/ForgotPassword/ForgotPassword';

function Modal({setSignedIn, signedIn, user, setOpenModal}) {
  return (
    <div className={"modal-bg"}>
        <div className={"modal-body"}>


            
            {!signedIn?<Login user={user} setSignedIn={setSignedIn} setOpenModal={setOpenModal}  />:null}
            {/* <ForgotPassword /> */}



        </div>
    </div>
    
  )
}

export default Modal

