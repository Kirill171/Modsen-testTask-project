import React, { useEffect } from 'react';
import searchImage from '@assets/search.png';
import searchBooks from '@api';
import Filter from './Filter';
import './index.css'
import PropTypes from 'prop-types';

export default function Header({
  setResult,
  setLoading,
  isBookInfoPage,
  inputValue,
  setInputValue,
  categories,
  setCategories,
  order,
  setOrder,
  startIndex,
  setStartIndex }) {

  useEffect(() => {
    setCategories(categories);
    setOrder(order);
    setInputValue(inputValue);
  }, [isBookInfoPage]);

  useEffect(() => {
    if (startIndex > 0) {
      handleSearch(inputValue, categories, order, startIndex);
    }
  }, [startIndex]);


  const handleSearch = async (inputValue, newCategories = categories, newOrder = order, newStartIndex = 0,) => {
    setLoading(true);
    try {
      const results = await searchBooks(inputValue, newCategories, newOrder, newStartIndex);
      setResult(prevResults => newStartIndex === 0 ? results : [...prevResults.slice(0, newStartIndex), ...results]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books', error);
      setResult([]);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setStartIndex(0);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      handleSearch(inputValue, categories, order, startIndex);
    }
  };

  const handleClick = () => {
    handleSearch(inputValue, categories, order, startIndex);
  };

  return (
    <header>
      <div className='text'>Search for books</div>
      <div className='inputDiv'>
        <input
          placeholder='Search for Books'
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={isBookInfoPage}
        />
        <img className='searchImage' onClick={handleClick} src={searchImage} alt='Search Icon' />
      </div>


      <Filter
        inputValue={inputValue}
        startIndex={startIndex}
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
  isBookInfoPage: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  setOrder: PropTypes.func.isRequired,
  startIndex: PropTypes.number.isRequired,
  setStartIndex: PropTypes.func.isRequired,
};