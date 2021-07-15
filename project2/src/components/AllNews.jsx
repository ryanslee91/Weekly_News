import { useState, useEffect } from "react";
import { BASE_URL, headers } from '../services';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllNews() {
  return (
    <div>
      <h3>TOPICS</h3>
      <Link to='/business'>Business</Link> <br />
      <Link to='/economy'>Economy</Link> <br />
      <Link to='/fashion'>Fashion</Link> <br />
      <Link to='/latin-america'>Latin America</Link> <br />
      <Link to='/markets'>Markets</Link> <br />
      <Link to='/politics'>Politics</Link> <br />
      <Link to='/sports'>Sports</Link> <br />
      <Link to='/tech'>Tech</Link> <br />
      <Link to='/us'>US</Link> <br />
      <Link to='/world'>World</Link> <br />
    </div>
  )
}