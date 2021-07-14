import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../services';
import { useParams } from 'react-router-dom';

export default function NewDetail() {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const articleURL = `${BASE_URL}/${id}`
      const res = await axios.get(articleURL, { headers });
      console.log(res.data);
      setArticle(res.data);
    };
fetchArticle()
  }, []);

  

  return (
    <div>
     <img src={article.fields?.image} alt={article.fields?.name} /><br />
      <h2>{article.fields?.title}</h2> <br />
      <h4>Topic: {article.fields?.topic}</h4><br />
      <h4>Author: {article.fields?.author}</h4> <br />
      <h3>{article.fields?.briefdesc}</h3><br />
      <h4><a href={article.fields?.link} target='_blank'>Read More</a></h4><br />
    </div>
  )
}