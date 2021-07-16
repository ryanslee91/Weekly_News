import { useState, useEffect } from "react";
import { BASE_URL, headers } from '../services';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import NewsSlider from './NewsSlider';
import './Home.css';

import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {

  const [articles, setArticles] = useState([]);
  const [allQueriedArticles, setAllQueriedArticles] = useState([]);
 
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
    <div class='home'>
      <div class='middle'>
      <div>
       <NewsSlider />
      </div>
      <div class='newsOfDay'>
      <h2 class='newsDay'>NEWS OF THE DAY</h2>
      {articles.map((article) => {
        if (article.fields.main === 'yes') {
          return (
            <Link to={`/article/${article.id}`} key={article.id} style={{ textDecoration: 'none'}}>
              <img src={article.fields.image} alt={article.fields.name} id='dayImage' />
              <h3>{article.fields.title}</h3>
            </Link>
          )
        }
      })}</div>
 </div>
      <div>
        <SearchBar onChange={handleSearch} />
        <div className='queriedArt'>
        {allQueriedArticles.map((article) => (
             <Link to={`/article/${article.id}`} key={article.id} style={{ textDecoration: 'none'}}>
             <img src={article.fields.image} alt={article.fields.name} />
            <h3>{article.fields.title}</h3>
          </Link>
        ))}</div>
        <h4 id='guide'>Click the image or title to read more..</h4>
      </div>
  </div>
)
}
