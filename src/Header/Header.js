import React from 'react';
import logo from "../Images/Ottspot.png"
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
        <div className="app-logo"><img id="logo" src={logo} alt="logo" /></div>
    </div>
  )
}

export default Header;