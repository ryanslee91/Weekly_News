import { useState, useEffect } from "react";
import { BASE_URL, headers } from '../services';
import axios from 'axios';
import './AllNews.css';
import { Link } from 'react-router-dom';

export default function AllNews() {
  return (
    <div className='allNewsList'>
      <Link to='/business' style={{textDecoration: 'none', color:'black'}}>Business</Link>
      <Link to='/economy' style={{textDecoration: 'none', color:'black'}}>Economy</Link> 
      <Link to='/fashion' style={{textDecoration: 'none', color:'black'}}>Fashion</Link> 
      <Link to='/latin-america' style={{textDecoration: 'none', color:'black'}}>Latin America</Link>
      <Link to='/markets' style={{textDecoration: 'none', color:'black'}}>Markets</Link> 
      <Link to='/politics' style={{textDecoration: 'none', color:'black'}}>Politics</Link> 
      <Link to='/sports' style={{textDecoration: 'none', color:'black'}}>Sports</Link> 
      <Link to='/tech' style={{textDecoration: 'none', color:'black'}}>Tech</Link> 
      <Link to='/us' style={{textDecoration: 'none', color:'black'}}>US</Link> 
      <Link to='/world' style={{textDecoration: 'none', color:'black'}}>World</Link> 
    </div>
  )
}