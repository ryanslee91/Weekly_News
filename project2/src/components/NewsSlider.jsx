
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from '../services';
import axios from 'axios';
import './NewsSlider.css';

export default function NewsSlider() {
  const [current, setCurrent] = useState(0);
  const [articles, setArticles] = useState([]);
  const length = articles.length

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

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  console.log(current);

  if (!Array.isArray(articles) || articles.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <div className='slider-arrows'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      </div>
        {articles.map((article, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'}
            key={index}>
              { index === current && (
              <Link to={`/article/${article.id}`} key={article.id} style={{ textDecoration: 'none' }}>
                <div class='img_wrap'>
                <img src={article.fields.image} alt={article.fields.name} className='imageSlide' />
                <p className="briefDesc">{article.fields.briefdesc}</p></div>
                <h3 className='title'>{article.fields.title}</h3>
                </Link>
              )}
          </div>
          );
        })}
    </section>
  )
}