import React from 'react'
import { Link } from 'react-router-dom'

import './ForgetPasswordPage.css'

const ForgetPasswordPage = () => {
    return (
        <div className="">
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <div>
                <p>First time? <Link to="/">Create an account</Link>.</p>
            </div>
        </div>
    )
}
export default ForgetPasswordPage ;
