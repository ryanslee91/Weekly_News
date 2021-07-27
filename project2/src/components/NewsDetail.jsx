import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../services';
import { useParams } from 'react-router-dom';
import NewComment from './NewComment';
import './NewsDetail.css';


export default function NewsDetail() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  
 

  useEffect(() => {
    
    fetchArticle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const fetchArticle = async () => {
    setComments([]);
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
      // console.log('res', res.data);
      setComments((prevComments) => ([...prevComments, res.data]))
    })
  }


  
  return (
    <div>
      <div className='fetched'>
        <img src={article.fields?.image} alt={article.fields?.name} id='fetchedImg' /><br />
        <div className='subInfo'>
          <h4 className='author'><span>Author:</span> {article.fields?.author}</h4>
          <h4 className='topic'><span>Topic:</span> {article.fields?.topic}</h4>
        </div>
        <div className='fetchedTwo'>
        <h2 id='fetchedTitle'>{article.fields?.title}</h2>
        <h3 className='briefDesc'>{article.fields?.briefdesc}</h3>
        <h4><a href={article.fields?.link} target='_blank' rel="noreferrer">Read More</a></h4>
        </div>
          <div className='commentSec'>
          <container className='addComCon'>
            <NewComment articleId={id} fetchArticle={fetchArticle} /> <br />
          </container>
        </div>
        <section>
        <div className='comments'>
          {comments.map(comment =>
          (<container className='commentCont'><h4><span id='commentor'>{comment.fields.name}: </span>
            {comment.fields.body}</h4></container>))}
          </div>
          </section>
      </div>
    </div>
  )
}