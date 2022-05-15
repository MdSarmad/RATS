import React, {useContext} from 'react';
import RatsContext from '../../../Context/RatsContext';
import "./Signup.css"
function Signup() {
    const {setLoginPopup,setSignUpPopup, setForgotPasswordPopup} = useContext(RatsContext);
    const haveAccount = () => {
        setLoginPopup(true);
        setForgotPasswordPopup(false);
        setSignUpPopup(false);
    }
  return (
        <div className="signupform">
            <div className='signupformBody'>
                    <h2 className='signupformTitle'>Join us</h2>
                    <h5 className='signupformSubTitle'>Create your personal account</h5>
                    <form action="/">
                        <div className='firstNameBody formstyle'>
                            <label>First Name</label><br/>
                            <input type="text" name="first_name" id="first_name" placeholder="First Name" class="FirstNameInput formstyle" required />
                        </div>

                        <div className='lastNameBody formstyle'>
                            <label>Last Name</label><br/>
                            <input type="text" name="last_name" id="last_name" placeholder="Last Name" class="LastNameInput formstyle" required />
                        </div>

                        <div className='emailBody formstyle'>
                            <label>Email address</label><br/>
                            <input type="email" name="email" id="email_address" placeholder="Email " class="EmailAddressInput formstyle" required />
                        </div>

                        {/* <div className='contactNoBody formstyle'>
                            <label>Contact No</label><br/>
                            <input type="number" name="conatact" id="contact" placeholder="Contact No" class="ContactNoInput formstyle" required />
                        </div> */}

                        <div className='passwordBody formstyle'>
                            <label>Password</label><br/>
                            <input type="password" name="password"  id="password" placeholder="password" class="PasswordInput formstyle"requiredc />
                        </div>

                        <div className='confirmPasswordBody formstyle'>
                            <label>ConfirmPassword</label><br/>
                            <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" class="ConfirmPasswordInput formstyle" requiredc />
                        </div>

                        <div>
                            <button className='signupButton' id="sub_btn" type="submit">Register</button>
                        </div>
                    </form>
                    <div haveAnAccountBody formstyle>
                        <p> Already have <span className='haveAnAccount' onClick={haveAccount}>an account</span></p>
                    </div>
            </div>
        </div>
  )
}

export default Signup