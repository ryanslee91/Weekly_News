import { useState, useEffect } from "react";
import { BASE_URL, headers } from '../services';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Politics() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(BASE_URL, {
        headers,
      });
      console.log(res.data.records);
      setArticles(res.data.records);
    }
    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => {
        if (article.fields.topic === 'Politics') {
          return (
            <Link to={`/article/${article.id}`} key={article.id}>
              <img src={article.fields.image} alt={article.fields.name} />
              <h3>{article.fields.title}</h3>
            </Link>
          )
        }
      })}
 </div>
  )
}
