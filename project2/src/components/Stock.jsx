import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Stock.css'

export default function Stocks() {
  const [stock, setStock] = useState([]);
  const URL = 'https://finnhub.io/api/v1/quote?symbol=AAPL&token=c3ohf8aad3ia07uet6j0'
  useEffect(() => {
    const fetchStock = async () => {
      const res = await axios.get(URL)
      console.log(res.data)
      setStock(res.data);
    }
    fetchStock()
  }, []);
  return (
    <div className='stock'>
      AAPL <br />
      <div className='stockStatus'>
      <span id='current'>Current:</span> {stock.c}
      <span id='highest'>Highest:</span> {stock.h}
      <span id='lowest'>Lowest:</span> {stock.l}
      <span id='opening'>Opening:</span> {stock.o}
        </div>
    </div>
  )
}

