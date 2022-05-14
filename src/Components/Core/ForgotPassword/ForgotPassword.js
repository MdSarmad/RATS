import React from 'react'
import "./ForgotPassword.css"
function ForgotPassword() {
  return (
        <div className='forgotform'>
            <div className='forgotformBody'>
                <h2 className='forgotformTitle'>Reset your password</h2>
                <h5 className='forgotformSubTitle'>Enter your email address and we will send you a new password</h5>
                <form action="/">
                    <div className='gmailBody formstyle'>
                        <label id="reset_pass_lbl">Email address</label><br/>
                        <input type="email" name="email" className='forgotEmail' required />
                    </div>
                    <div className='forgotButtonBody formstyle'>
                        <button id="sub_btn" type="submit" className='forgotButton formstyle'>Send password reset email</button>
                    </div>
                </form>
                <div className='haveAnAccountBody'>
                    <p>First time? <a href='/' className='createAnAccount' >Create an account</a>.</p>
                </div>
            </div>
        </div>
  )
}

export default ForgotPassword