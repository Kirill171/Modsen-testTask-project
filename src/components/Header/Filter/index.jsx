import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export default function Filter({ inputValue, startIndex, categories, order, setCategories, setOrder, handleSearch }) {
  const handleChangeCategories = (e) => {
    const newCategories = e.target.value;
    setCategories(newCategories);
    handleSearch(inputValue, newCategories, order, startIndex);
  };

  const handleChangeOrder = (e) => {
    const newOrder = e.target.value;
    setOrder(newOrder);
    handleSearch(inputValue, categories, newOrder, startIndex);
  };

  return (
    <div className='Filter'>
      <label htmlFor='categories'>Categories</label>
      <select id='categories' value={categories} onChange={handleChangeCategories} >
        <option value='all'>all</option>
        <option value='art'>art</option>
        <option value='biography'>biography</option>
        <option value='computers'>computers</option>
        <option value='history'>history</option>
        <option value='medical'>medical</option>
        <option value='poetry'>poetry</option>
      </select>

      <label htmlFor='sortingBy'>Sorting by</label>
      <select id='sortingBy' value={order} onChange={handleChangeOrder} >
        <option value='relevance'>relevance</option>
        <option value='newest'>newest</option>
      </select>
    </div>
  );
}

Filter.propTypes = {
  inputValue: PropTypes.string.isRequired,
  startIndex: PropTypes.number.isRequired,
  categories: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
