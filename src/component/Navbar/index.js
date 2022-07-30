import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='heading'>OYODO</div>
      <div className='navtab__list'>
        <div className="navtab">HOME</div>
        <div className="navtab">DAPIBUS</div>
        <div className="navtab">ULTRICIES</div>
        <div className="navtab">BIBENDUM</div>
        <div className="navtab">MAGNA</div>
      </div>
    </div>
  )
}

export default Navbar;
