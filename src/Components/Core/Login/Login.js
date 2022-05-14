import React from 'react'
import "./Login.css"

function Login() {
  return (
    <>
            <div class="loginForm">
                    <div class="formBody">
                        <p class="formTitle">Hello Again !</p>
                        <p class="formSubTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <form class="formInput">
                            <div class="emailBody formstyle">
                                <input type="text" name="email" id="email" placeholder="Email" class="emailInput"/>
                            </div>
                            <div class="passwordBody formstyle">
                                <input type="password" name="password" id="password" placeholder="Password" class="passwordInput"/>
                            </div>
                            <div class="memoryForm formstyle">
                                <div class="memoryCheck">
                                    <input type="checkbox" name="remembrMe" id="remembrMe" />
                                    <label for="rememberMe">Remeber me</label>
                                </div>

                                <div class="forgotPassword">
                                    <p>Forgot Password?</p>
                                </div>
                            </div>

                            <div class="loginButton formstyle">Login</div>
                            <div class="noAccount formstyle">
                                <span>Don't have an account?</span>
                                <a href="/">Create an account</a>
                            </div>
                        </form>
                    </div>
                </div>
        </>
  )
}

export default Login