import React, {createContext, useState, useRef} from 'react';
import { signup, logout, login, useAuth } from '../firebase/firebase';
const RatsContext = createContext();

export const RatsProvider = ({children}) => {
  const [signupEmail, setSignupEmail] = useState();
  const [signupPassword, setSignupPassword] = useState();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [signUpPopup, setSignUpPopup] = useState(false);
  const [forgotPasswordPopup, setForgotPasswordPopup] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [wrongPasswordText,setWrongPasswordText]= useState("");
  const currentUser = useAuth();
  const user = useRef({
    email: "admin@rats.com",
    password: "admin@rats"
  });
  const handleSignup = async() => {
    setLoading(true);
      try {
          await signup(signupEmail, signupPassword);
          setOpenModal(false);
          setSignedIn(true);
      } catch {
        alert("Please enter unregistered correct email");
      }
    setLoading(false);
  }

  const handleLogin = async() => {
    setLoading(true);
    try {
      await login(userEmail, userPassword);
      setUserEmail("");
      setUserPassword("");
      setSignedIn(true);
      setWrongPasswordText("");
      setOpenModal(false);
    } catch {
      alert("Please enter unregistered correct email");
      setWrongPasswordText("Wrong Email or Password");
      setSignedIn(true);
      setOpenModal(true);
    }
    setLoading(false);
  }

  const handleLogout = async() => {
    setLoading(true);
    try{
      await logout();
    } catch {
      alert("Please Enter LOGOUT Button to Logout");
    }
    setOpenModal(false);
  }

  const rats = {
    loading,
    currentUser,
    handleSignup,
    handleLogin,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    handleLogout,
    setSignupEmail,
    setSignupPassword,
    loginPopup,
    setLoginPopup,
    signUpPopup,
    setSignUpPopup,
    forgotPasswordPopup,
    setForgotPasswordPopup,
    signedIn,
    setSignedIn,
    openModal,
    setOpenModal,
    user,
    wrongPasswordText,
    setWrongPasswordText,
  };

  return (
    <RatsContext.Provider value={rats}>
      {children}
    </RatsContext.Provider>
  )
}

export default RatsContext;