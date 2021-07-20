import { useState, useEffect } from "react";
import { BASE_URL, headers } from '../services';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import NewsSlider from './NewsSlider';
import { Helmet } from 'react-helmet';
import './Home.css';

export default function Home() {

  const [articles, setArticles] = useState([]);
  const [allQueriedArticles, setAllQueriedArticles] = useState([]);
  const TITLE = 'Weekly Hot News';
// for searchbar
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(BASE_URL, {
        headers,
      });
      // console.log(res.data.records);
      setArticles(res.data.records);
    }
    fetchArticles();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (articles.length > 0) {
      if (e.target.value === '' || e.target.value === ' ') {
        const newQueriedListings = []
        setAllQueriedArticles(newQueriedListings);
      } else {
        const newQueriedListings = articles.filter((article) =>
          article.fields.title.toLowerCase().includes(e.target.value.toLowerCase())
        ); setAllQueriedArticles(newQueriedListings);
      }
    }
  };  

  return (
    <div className='home'>
      <Helmet>
        <title>
          {TITLE}
        </title>
      </Helmet>
      <div className='topicList'>
      <Link to='/business' style={{textDecoration: 'none', color:'black'}}>Business</Link>
      <Link to='/economy' style={{textDecoration: 'none', color:'black'}}>Economy</Link> 
      <Link to='/fashion' style={{textDecoration: 'none', color:'black'}}>Fashion</Link> 
      <Link to='/latin-america' style={{textDecoration: 'none', color:'black'}}>Latin America</Link>
      <Link to='/markets' style={{textDecoration: 'none', color:'black'}}>Markets</Link> 
      <Link to='/politics' style={{textDecoration: 'none', color:'black'}}>Politics</Link> 
      <Link to='/sports' style={{textDecoration: 'none', color:'black'}}>Sports</Link> 
      <Link to='/tech' style={{textDecoration: 'none', color:'black'}}>Tech</Link> 
      <Link to='/us-news' style={{textDecoration: 'none', color:'black'}}>US</Link> 
      <Link to='/world' style={{textDecoration: 'none', color:'black'}}>World</Link> 
      </div>
      <div className='middle'>
      <div>
       <NewsSlider />
      </div>
      <div className='newsOfDay'>
      <h2 className='newsDay'>NEWS OF THE DAY</h2>
      {articles.map((article) => {
        if (article.fields.main === 'yes') {
          return (
            <Link to={`/article/${article.id}`} key={article.id} style={{ textDecoration: 'none'}}>
              <img src={article.fields.image} alt={article.fields.name} id='dayImage' />
              <h3>{article.fields.title}</h3>
            </Link>
          )
        }
        return null;
      })}</div>
 </div>
      <div className='lastPart'>
        <SearchBar onChange={handleSearch} />
        <div className='queriedArt'>
        {allQueriedArticles.map((article) => (
             <Link to={`/article/${article.id}`} key={article.id} style={{ textDecoration: 'none'}}>
             <img src={article.fields.image} alt={article.fields.name} className='queriedImg' />
            <p><h3 id='queriedTitle'>{article.fields.title}</h3></p>
          </Link>
        ))}</div>
        <h4 id='guide'>Click the image or title to read more..</h4>
      </div>
  </div>
)
}

// Helmet information from
// https://stackoverflow.com/questions/46160461/how-do-you-set-the-document-title-in-react