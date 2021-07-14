import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../services';
import { useParams } from 'react-router-dom';
import NewComment from './NewComment'

export default function NewDetail() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    
fetchArticle()
  }, []);

  const fetchArticle = async () => {
    const articleURL = `${BASE_URL}/${id}`
    const res = await axios.get(articleURL, { headers });
    // console.log(res.data);
    setArticle(res.data);
    if (res.data.fields.comments) {
      fetchComments(res.data.fields.comments)
    }
  };


  const fetchComments = async (commentsArr) => {
    const commentURL = 'https://api.airtable.com/v0/appzOtkGYT2fmwlmR/comments/'
    commentsArr.forEach(async comment => {
      const res = await axios.get(`${commentURL}${comment}`, { headers });
      console.log('res', res.data);
      setComments((prevComments) => ([...prevComments, res.data]))
    })
  }
  
  return (
    <div>
     <img src={article.fields?.image} alt={article.fields?.name} /><br />
      <h2>{article.fields?.title}</h2> <br />
      <h4>Topic: {article.fields?.topic}</h4><br />
      <h4>Author: {article.fields?.author}</h4> <br />
      <h3>{article.fields?.briefdesc}</h3><br />
      <h4><a href={article.fields?.link} target='_blank'>Read More</a></h4><br />
      {comments.map(comment => comment.fields.body)};
    <NewComment articleId={id} fetchArticle={fetchArticle} /> <br />
    </div>
  )
}