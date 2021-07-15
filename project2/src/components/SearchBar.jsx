import React from 'react';

export default function SearchBar() {
  return (
    <div>
      <h3>LOOK FOR MORE ARTICLES</h3>
      <input type='text' placeholder='Search..' style={{ marginBottom: ' 40px' }}></input>
      <button>Search</button>
    </div>
  )
}