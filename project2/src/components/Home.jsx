import { useState, useEffect } from "react";
import { BASE_URL, headers } from '../services';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {

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
      <h2 style={{ color: "green" }}>NEWS OF THE DAY</h2>
      <div>
        {articles.map((article) => {
          if (article.fields.main === 'yes') {
            return (
              <Link to={`/article/${article.id}`} key={article.id}>
                <img src={article.fields.image} alt={article.fields.name} />
                <h3>{article.fields.title}</h3>
              </Link>
            )
          }
      })}
      </div>
      <div>
        <SearchBar />
      </div>
  </div>
)
}
