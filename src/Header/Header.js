import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/Ottspot.png"
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll event listener to change header color on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add('black');
    } else {
      header.classList.remove('black');
    }
  });

  return (
    <div className='header'>
      <div className="app-logo">
        <Link to="/">
          <img id="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className='navbar'>
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/platforms"><li>Platforms</li></Link>
            <li>Services</li>
            <li>Support & FAQ</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <button className='purchase-button'>Purchase Now</button>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={isMenuOpen ? 'hamburger open' : 'hamburger'}></div>
        </div>
      </div>
    </div>
  )
}

export default Header;
