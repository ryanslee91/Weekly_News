import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Stock from './Stock';

export default function Navbar() {
  return (
    
    <div className='navBar'>
      <div>
        <header>
          <Link to='/about-us' style={{ textDecoration: 'none', color: 'black' }}>
            <span id='aboutUs'>About Us</span></Link>
        </header>
      </div>
      <Link to="/" style={{ textDecoration: 'none'}}>
        <h1 id='homeTitle'>WEEKLY HOT NEWS</h1>
      </Link>
      <nav className='stockNav'>
        <Stock />
        </nav>
        <nav className='newsList'>
        <Link to='/all-news' style={{ textDecoration: 'none', color: 'black' }}>
         NEWS LIST</Link>
      </nav>
    </div>
  )
}