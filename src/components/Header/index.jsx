import React, {useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import searchImage from '@assets/search.png';
import searchBooks from '../../api';
import Filter from './Filter';
import './index.css'
import PropTypes from 'prop-types';

export default function Header({ setResult, setLoading, inputRef, inputValue, setInputValue, categories, setCategories, order, setOrder }) {
  const location = useLocation(); 
  const isBookInfoPage = location.pathname === '/book-info';

  useEffect(() => {
      setCategories(categories);
      setOrder(order);
      inputRef.current.value = inputValue; 
  }, [isBookInfoPage]);


  async function handleSearch() {
    const queryValue = inputRef.current?.value || '';
    setInputValue(queryValue);

    if(inputValue.length > 0) {
      setLoading(true);
  
      try {
        const results = await searchBooks(inputValue, categories, order);

        setResult(results || []);
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
        <input placeholder='Search for Books' ref={inputRef} onChange={handleSearch} disabled={isBookInfoPage} />
        <img className='searchImage' src={searchImage} alt='Search Icon' />
      </div>

      <Filter
        categories={categories}
        order={order}
        setCategories={setCategories}
        setOrder={setOrder}
        handleSearch={handleSearch}
      />

    </header>
  );
}

Header.propTypes = {
  setResult: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  inputRef: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  setOrder: PropTypes.func.isRequired,
};