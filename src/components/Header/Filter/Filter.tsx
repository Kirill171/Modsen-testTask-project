import React from 'react';

export default function Filter({ searchBooks }: { searchBooks: (value: string) => void }) {
  function changeCategories(value: string) {
    // setCategories(value);
    searchBooks(value);
  }

  function changeOrder(value: string) {
    // setOrder(value);
    searchBooks(value);
  }

  return (
    <div className='Filter'>
        <label htmlFor='categories'>Categories</label>
        <select id='categories' onChange={(e) => changeCategories(e.target.value)} >
          <option value='all'>all</option>
          <option value='art'>art</option>
          <option value='biography'>biography</option>
          <option value='computers'>computers</option>
          <option value='history'>history</option>
          <option value='medical'>medical</option>
          <option value='poetry'>poetry</option>
        </select>

        <label htmlFor='sortingBy'>Sorting by</label>
        <select id='sortingBy' onChange={(e) => changeOrder(e.target.value)} >
          <option value='relevance'>relevance</option>
          <option value='newest'>newest</option>
        </select>
      </div>
  )
}
