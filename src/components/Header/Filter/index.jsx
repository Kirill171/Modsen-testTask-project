import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export default function Filter({ categories, order, setCategories, setOrder, searchBooks }) {
  const handleChangeCategories = (e) => {
    setCategories(e.target.value);
    getBook();
  };

  const handleChangeOrder = (e) => {
    setOrder(e.target.value);
    getBook();
  };

  const getBook = () => {
    searchBooks();
  }

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
  categories: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
  searchBooks: PropTypes.func.isRequired,
};
