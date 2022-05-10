import React from 'react'
import { Link } from 'react-router-dom'

import './SignUpPage..css'

const SignUpPage = () => {

    return (
        <div className="">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/">
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="last_name" required />
                </p>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="user_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Contact No</label><br/>
                    <input type="number" name="conatact" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <div>
                <p>Already have <Link to="/">an account</Link>.</p>
            </div>
        </div>
    )

}
export default SignInPage ;
