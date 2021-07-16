import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Stock from './Stock';

export default function Navbar() {
  return (
    <div>
      <div>
        <header>
          <Link to='/about-us' style={{ textDecoration: 'none', color: 'black' }}>
            <span id='aboutUs'>About Us</span></Link>
        </header>
      </div>
      <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>
        <h1 id='homeTitle'>WEEKLY HOTTEST NEWS</h1>
      </Link>
      <nav className='stock'>
        <Stock />
        </nav>
        <nav className='newslist'>
        <Link to='/all-news' style={{ textDecoration: 'none', color: 'brown' }}>
         NEWS LIST</Link>
        </nav>
    </div>
  )
}