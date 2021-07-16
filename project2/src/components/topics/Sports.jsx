import { useState, useEffect } from "react";
import { BASE_URL, headers } from '../../services/index';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Topics.css';

export default function Sports() {
  const [articles, setArticles] = useState([]);
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

  return (
    <div className='topicData'>
      {articles.map((article) => {
        if (article.fields.topic === 'Sports') {
          return (
            <Link to={`/article/${article.id}`} key={article.id} style={{textDecoration: 'none'}}>
              <img src={article.fields.image} alt={article.fields.name} />
              <h3>{article.fields.title}</h3>
            </Link>
          )
        }
      })}
 </div>
  )
}
