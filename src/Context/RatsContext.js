import React, {createContext, useState, useRef} from 'react';
const RatsContext = createContext();

export const RatsProvider = ({children}) => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [signUpPopup, setSignUpPopup] = useState(false);
  const [forgotPasswordPopup, setForgotPasswordPopup] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const[openModal, setOpenModal] = useState(false);
  const user = useRef({
    email: "admin@rats.com",
    password: "admin@rats"
  });

  const rats = {
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
    user
  };

  return (
    <RatsContext.Provider value={rats}>
      {children}
    </RatsContext.Provider>
  )
}

export default RatsContext;