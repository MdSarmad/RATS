import React, {useContext} from 'react';
import { useNavigate } from 'react-router';
import RatsContext from '../../Context/RatsContext';
import './Navbar.css';
import logo from '../../images/logo.png';
import Modal from '../../Components/Modal/Modal.js';

const Navbar = () => {
    const navigate = useNavigate();
    const {signedIn, openModal, setOpenModal, setSignedIn, handleLogout} = useContext(RatsContext);
    // ()=>{setOpenModal(!openModal)}
    const logFunction = () => {
        if(!signedIn) {
            setOpenModal(!openModal);
        } else {
            setSignedIn(false);
            handleLogout();
            navigate("/");
        }
    }
    return (
        <div className='navbar'>
            <div className="navbar-left"> 
                <img className="logo" src={logo} alt="logo-img" />
            </div>
            <div className="navbar-right">
                <div className={"nav-item"} onClick={() => navigate("/")}>HOME</div>
                <div className={"nav-item"} onClick={() => navigate("/frontend")}>FRONTEND</div>
                <div className={"nav-item"} onClick={() => navigate("/backend")}>BACKEND</div>
                <div className={"nav-item"} onClick={() => navigate("/fullstack")}>FULL STACK</div>

                <div className={"nav-item"} onClick={logFunction} >
                    {signedIn?"LOGOUT":"LOGIN"}
                </div>
                {openModal && !signedIn &&  <Modal />}


            </div>
        </div>
    )
};

export default Navbar;