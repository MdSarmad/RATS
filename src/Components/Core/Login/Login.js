import React,{useState, useContext} from 'react';
import RatsContext from '../../../Context/RatsContext';
import "./Login.css"

function Login() {
    const {user,setSignedIn,setOpenModal, setLoginPopup, setSignUpPopup, setForgotPasswordPopup} = useContext(RatsContext);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [wrongPasswordText,setWrongPasswordText]= useState("");
    const loginUser = () => {
        if(userEmail === user.current.email && userPassword=== user.current.password) {
            setSignedIn(true);
            setWrongPasswordText("");
            setOpenModal(false);
            console.log(userEmail,user.current.email);
            console.log(userPassword,user.current.password);
        }else{
            setWrongPasswordText("Please Enter Correct Password");
            console.log(userEmail,user.current.email);
            console.log(userPassword,user.current.password);
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
            <div class="loginForm">
                    <div class="formBody">
                        <p class="formTitle">Hello Again !</p>
                        <p class="formSubTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <form class="formInput">
                            <div class="emailBody formstyle">
                                <input type="text" name="email" id="email" placeholder="Email" value={userEmail} class="emailInput" onChange={(e) => setUserEmail(e.target.value)}/>
                            </div>
                            <div class="passwordBody formstyle">
                                <input type="password" name="password" id="password" placeholder="Password" value={userPassword} class="passwordInput" onChange={(e) => setUserPassword(e.target.value)}/>
                            </div>
                            <div class="memoryForm formstyle">
                                <div class="memoryCheck">
                                    <input type="checkbox" name="remembrMe" id="remembrMe" />
                                    <label for="rememberMe">Remeber me</label>
                                </div>

                                <div class="forgotPassword">
                                    <p onClick={resetPassword}>Forgot Password?</p>
                                </div>
                            </div>

                            <div class="loginButton formstyle" onClick={loginUser}>Login</div>
                            <div className="wrong-password">{wrongPasswordText}</div>
                            <div class="noAccount formstyle">
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