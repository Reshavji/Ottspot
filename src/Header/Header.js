import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../Images/Ottspot.png"
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
        <div className="app-logo"><Link to="/"><img id="logo" src={logo} alt="logo" /></Link></div>
        <div className='navbar'>
            <nav>
                <ul>
                    <Link to ="/"><li>Home</li></Link>
                    <Link to="/platforms"><li>Platforms</li></Link>
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