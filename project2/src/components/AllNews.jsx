import './AllNews.css';
import { Link } from 'react-router-dom';

export default function AllNews() {
  return (
    <div className='allNewsList'>
      <Link to='/business' style={{textDecoration: 'none', color:'black'}} className='business'>Business</Link>
      <Link to='/economy' style={{textDecoration: 'none', color:'black'}} className='economy'>Economy</Link> 
      <Link to='/fashion' style={{textDecoration: 'none', color:'black'}} className='fashion'>Fashion</Link> 
      <Link to='/latin-america' style={{textDecoration: 'none', color:'black'}} className='latame'>Latin America</Link>
      <Link to='/markets' style={{textDecoration: 'none', color:'black'}} className='markets'>Markets</Link> 
      <Link to='/politics' style={{textDecoration: 'none', color:'black'}} className='politics'>Politics</Link> 
      <Link to='/sports' style={{textDecoration: 'none', color:'black'}} className='sports'>Sports</Link> 
      <Link to='/tech' style={{textDecoration: 'none', color:'black'}} className='tech'>Tech</Link> 
      <Link to='/us-news' style={{textDecoration: 'none', color:'black'}} className='usNews'>US</Link> 
      <Link to='/world' style={{textDecoration: 'none', color:'black'}} className='world'>World</Link> 
    </div>
  )
}