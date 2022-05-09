import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
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
                <div className={"nav-item"} >LOGIN</div>
            </div>
        </div>
    )
};

export default Navbar;