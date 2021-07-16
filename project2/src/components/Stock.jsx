import axios from 'axios'
import React, { useState, useEffect } from 'react'

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
      Current: {stock.c}
      Highest: {stock.h}
      Lowest: {stock.l}
      Opening: {stock.o}
        </div>
    </div>
  )
}
