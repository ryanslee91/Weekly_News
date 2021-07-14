import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <h1>WEEKLY HOTTEST NEWS</h1>
      </Link>
      <div>
      <Link to ='about-us'>About Us</Link>
      <Link to ='all-news'>All News</Link>
      <Link to ='contact-us'>Contact Us</Link>
        </div>
    </div>
  )
}