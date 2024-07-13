import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import searchImage from '@assets/search.png';
import Filter from './Filter';
import './index.css'
import PropTypes from 'prop-types';

export default function Header({ setResult, setLoading }) {
  const inputRef = useRef(null);
  const location = useLocation(); 

  const [categories, setCategories] = useState('all');
  const [order, setOrder] = useState('relevance');

  const queryRef = useRef('');
  const isBookInfoPage = location.pathname === '/BookInfo';

  async function searchBooks() {
    const queryValue = inputRef.current?.value || '';

    if(queryValue.length > 0 && queryValue !== queryRef.current) {
      queryRef.current = queryValue;
      setLoading(true);
  
      try {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${queryValue}&orderBy=${order}`;
        if (categories !== 'all') {
          url += `+subject:${categories}`;
        }
  
        const response = await fetch(url);
        const data = await response.json();
        setResult(data.items || []);
        setLoading(false);
  
      } catch (error) {
        console.error('Error fetching books', error);
        setResult([]);
        setLoading(false);
      }
    }
  }

  return (
    <header>
      <div className='text'>Search for books</div>

      <div className='inputDiv'>
        <input placeholder='Search for Books' ref={inputRef} onChange={searchBooks} disabled={isBookInfoPage} />
        <img className='searchImage' src={searchImage} alt='Search Icon' />
      </div>

      <Filter
        categories={categories}
        order={order}
        setCategories={setCategories}
        setOrder={setOrder}
        searchBooks={searchBooks}
      />

    </header>
  );
}

Header.propTypes = {
  setResult: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};


// <Main result={result} loading={loading} isHomePage={isHomePage} />