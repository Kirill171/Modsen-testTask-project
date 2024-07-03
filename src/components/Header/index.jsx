import searchImage from '@assets/search.png';
import React, { useRef, useState } from 'react';
import Filter from './Filter';
import Main from '../Main';
import './index.css'

export default function Header() {
  const inputRef = useRef(null);

  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [categories, setCategories] = useState('all');
  const [order, setOrder] = useState('relevance');
  const [loading, setLoading] = useState(false);

  async function searchBooks() {
    const queryValue = inputRef.current?.value || '';
    setQuery(queryValue);
    setLoading(true);

    try {
      let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${order}`;
      if (categories !== 'all') {
        url += `+subject:${categories}`;
      }
      url += `&orderBy=${order}`;

      const response = await fetch(url);
      const data = await response.json();
      setResult(data.items || []);
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books', error);
      setResult([]);
      setLoading(false);
    }
  }

  return (
    <header>
      <div className='text'>Search for books</div>

      <div className='inputDiv'>
        <input placeholder='Search for Books' ref={inputRef} onChange={searchBooks} />
        <img className='searchImage' src={searchImage} alt='Search Icon' />
      </div>

      <Filter
        categories={categories}
        order={order}
        setCategories={setCategories}
        setOrder={setOrder}
        searchBooks={searchBooks}
      />

      <Main result={result} loading={loading} />
    </header>
  );
}
