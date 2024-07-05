import searchImage from '@assets/search.png';
import React, { useRef, useState, useContext } from 'react';
import Filter from './Filter';
import Main from '../Main';
import './index.css'
import BookContext from '../Context/BookContext';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const inputRef = useRef(null);
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const { setSelectedBook } = useContext(BookContext);
  const [result, setResult] = useState([]);
  const [categories, setCategories] = useState('all');
  const [order, setOrder] = useState('relevance');
  const [loading, setLoading] = useState(false);

  const queryRef = useRef('');
  const isBookInfoPage = location.pathname === '/Main/Cards/BookInfo';

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
  
        navigate(`/`);
      } catch (error) {
        console.error('Error fetching books', error);
        setResult([]);
        setLoading(false);
      }
    }
  }

  const isHomePage = location.pathname === '/';

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

      <Main result={result} loading={loading} setSelectedBook={setSelectedBook} isHomePage={isHomePage} />
    </header>
  );
}
