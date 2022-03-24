import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left"></div>
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