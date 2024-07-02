import searchImage from '@assets/search.png';
import React, { useRef, useState } from 'react';
import Filter from './Filter';
import Main from '../Main';

export default function Header() {
  const inputRef = useRef(null);

  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);  // Инициализация как пустой массив
  const [categories, setCategories] = useState('all');
  const [order, setOrder] = useState('relevance');

  async function searchBooks() {
    const queryValue = inputRef.current?.value || '';
    setQuery(queryValue);

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
    } catch (error) {
      console.error('Error fetching books', error);
      setResult([]);
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

      <Main result={result} />
    </header>
  );
}
