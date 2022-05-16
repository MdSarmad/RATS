import React, {useContext} from 'react';
import RatsContext from '../../../Context/RatsContext';
import "./Signup.css"
function Signup() {
    const {
        setLoginPopup,
        setSignUpPopup, 
        setForgotPasswordPopup,
        handleSignup,
        setSignupEmail,
        setSignupPassword,
    } = useContext(RatsContext);
    const haveAccount = () => {
        setLoginPopup(true);
        setForgotPasswordPopup(false);
        setSignUpPopup(false);
    }
  return (
        <div className="signupform">
            <div className='signupformBody'>
                    <p className='signupformTitle'>Join us</p>
                    <p className='signupformSubTitle'>Create your personal account</p>
                    <form action="/">
                        
                            <div className='firstNameBody formstyle'>
                                <label>First Name</label><br/>
                                <input type="text" name="first_name" id="first_name" placeholder="First Name" class="FirstNameInput formstyle"  />
                            </div>

                            <div className='lastNameBody formstyle'>
                                <label>Last Name</label><br/>
                                <input type="text" name="last_name" id="last_name" placeholder="Last Name" className="LastNameInput formstyle"  />
                            </div>
                       

                        <div className='emailBody formstyle'>
                            <label>Email address</label><br/>
                            <input type="email" name="email" id="email_address" placeholder="Email " className="EmailAddressInput formstyle" onChange={(e) => setSignupEmail(e.target.value)} required />
                        </div>

                        {/* <div className='contactNoBody formstyle'>
                            <label>Contact No</label><br/>
                            <input type="number" name="conatact" id="contact" placeholder="Contact No" className="ContactNoInput formstyle" required />
                        </div> */}

                        <div className='passwordBody formstyle'>
                            <label>Password</label><br/>
                            <input type="password" name="password"  id="password" placeholder="password" className="PasswordInput formstyle" onChange={(e) => setSignupPassword(e.target.value)} required />
                        </div>

                    {/*
                        <div className='confirmPasswordBody formstyle'>
                            <label>ConfirmPassword</label><br/>
                            <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" className="ConfirmPasswordInput formstyle" requiredc />
                        </div>
                    */}

                        <div>
                            <div className='signupButton' id="sub_btn" onClick={handleSignup}>Register</div>
                        </div>
                    </form>
                    <div haveAnAccountBody formstyle>
                        <p> Already have<span className='haveAnAccount' onClick={haveAccount}>an account.</span></p>
                    </div>
            </div>
        </div>
  )
}

export default Signup