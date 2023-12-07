import React from 'react';
import logo from "../Images/Ottspot.png"
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
        <div className="app-logo"><img id="logo" src={logo} alt="logo" /></div>
        <div className='navbar'>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Platforms</li>
                    <li>Services</li>
                    <li>Support & FAQ</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <button className='purchase-button'>Purchase Now</button>
        </div>
    </div>
  )
}

export default Header;