import React, {useState} from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';
import Modal from '../../Components/Modal/Modal.js';

const Navbar = ({setSignedIn, signedIn, user}) => {
    const[openModal, setOpenModal] = useState(false);
    return (
        <div className='navbar'>
            <div className="navbar-left"> 
                <img className="logo" src={logo} alt="image" />
            </div>
            <div className="navbar-right">
                <div className={"nav-item"} >HOME</div>
                <div className={"nav-item"} >SERVICE</div>
                <div className={"nav-item"} >CONTACT</div>
                <div className={"nav-item"} >ABOUT</div>

                <div className={"nav-item"} onClick={()=>{setOpenModal(!openModal)}} >
                    LOGIN
                </div>
                {openModal && !signedIn &&  <Modal setSignedIn={setSignedIn} signedIn={signedIn} user={user} setOpenModal={setOpenModal} />}


            </div>
        </div>
    )
};

export default Navbar;