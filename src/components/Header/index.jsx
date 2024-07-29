import React, {useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import searchImage from '@assets/search.png';
import searchBooks from '../../api';
import Filter from './Filter';
import './index.css'
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

export default function Header({ setResult, setLoading, inputRef, inputValue, setInputValue, categories, setCategories, order, setOrder, startIndex, setStartIndex }) {
  const location = useLocation(); 
  const isBookInfoPage = location.pathname === '/book-info';

  useEffect(() => {
      setCategories(categories);
      setOrder(order);
      inputRef.current.value = inputValue;
  }, [isBookInfoPage]);


  const debouncedSearch = useCallback(
    debounce(async (value, newStartIndex = 0) => {
      if (value.length > 0) {
        setLoading(true);
        try {
          const results = await searchBooks(value, categories, order, newStartIndex);
          setResult(prevResults => newStartIndex === 0 ? results : [...prevResults.slice(0, newStartIndex), ...results]);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching books', error);
          setResult([]);
          setLoading(false);
        }
      }
    }, 300),
    [categories, order, setLoading, setResult]
  );

  useEffect(() => {
    if (!isBookInfoPage) {
      debouncedSearch(inputValue, startIndex);
    }
    return () => {
      debouncedSearch.cancel();
    };
  }, [inputValue, debouncedSearch, startIndex, isBookInfoPage]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setStartIndex(0);
  };

  const handleLoadMore = () => {
    const newStartIndex = startIndex + 20;
    setStartIndex(newStartIndex);
    debouncedSearch(inputValue, newStartIndex);
  };

  return (
    <header>
      <div className='text'>Search for books</div>
      <div className='inputDiv'>
        <input
          placeholder='Search for Books'
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
          disabled={isBookInfoPage}
        />
        <img className='searchImage' src={searchImage} alt='Search Icon' />
      </div>


      <Filter
        categories={categories}
        order={order}
        setCategories={setCategories}
        setOrder={setOrder}
        handleSearch={() => debouncedSearch.flush()}
      />

      <button onClick={handleLoadMore} disabled={isBookInfoPage}>Load More</button>
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
  startIndex: PropTypes.number.isRequired,
  setStartIndex: PropTypes.func.isRequired,
};