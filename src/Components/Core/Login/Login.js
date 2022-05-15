import React,{useContext} from 'react';
import RatsContext from '../../../Context/RatsContext';
import "./Login.css"

function Login() {
    const {
        userEmail,
        userPassword,
        setUserEmail,
        setUserPassword,
        wrongPasswordText,
        setWrongPasswordText,
        setLoginPopup, 
        setSignUpPopup, 
        setForgotPasswordPopup, 
        handleLogin
    } = useContext(RatsContext);
    const loginUser = () => {
        if(userEmail && userPassword.length>6) {
            handleLogin();
            console.log("login.js -> userEmail ",userEmail);
            console.log("login.js -> userPassword ",userPassword);
        }else{
            setWrongPasswordText("Please Enter Correct Password");
        }
    }
    const createAccount = () => {
        setLoginPopup(false);
        setForgotPasswordPopup(false);
        setSignUpPopup(true);
    }
    const resetPassword = () => {
        setLoginPopup(false);
        setForgotPasswordPopup(true);
        setSignUpPopup(false);
    }
  return (
    <>
            <div className="loginForm">
                    <div className="formBody">
                        <p className="formTitle">Hello Again !</p>
                        <p className="formSubTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <form className="formInput">
                            <div className="emailBody formstyle">
                                <input type="text" name="email" id="email" placeholder="Email" value={userEmail} className="emailInput" onChange={(e) => setUserEmail(e.target.value)} required/>
                            </div>
                            <div className="passwordBody formstyle">
                                <input type="password" name="password" id="password" placeholder="Password" value={userPassword} className="passwordInput" onChange={(e) => setUserPassword(e.target.value)} required/>
                            </div>
                            <div className="memoryForm formstyle">
                                <div className="memoryCheck">
                                    <input type="checkbox" name="remembrMe" id="remembrMe" />
                                    <label htmlFor="rememberMe">Remeber me</label>
                                </div>

                                <div className="forgotPassword">
                                    <p onClick={resetPassword}>Forgot Password?</p>
                                </div>
                            </div>

                            <div className="loginButton formstyle" onClick={loginUser}>Login</div>
                            <div className="wrong-password">{wrongPasswordText}</div>
                            <div className="noAccount formstyle">
                                <span>Don't have an account?</span>
                                <span className='create-account' onClick={createAccount}>Create an account</span>
                            </div>
                        </form>
                    </div>
                </div>
        </>
  )
}

export default Login