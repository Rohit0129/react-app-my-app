import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header id='header'>
      <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <h1><Link to="/" className='logo'>EZ-Travels</Link></h1>
        </div>
        <div className='menus'>
          <ul>
            <li><Link to="/" className='menu-links'>Home</Link></li>
            <li><Link to="about" className='menu-links'>About</Link></li>
            <li><Link to="contact" className='menu-links'>Contact</Link></li>
          </ul>
        </div>
      </div>
      </div>
      </header>
    );
}

export default Navbar;