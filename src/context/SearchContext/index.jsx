import React, { createContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [categories, setCategories] = useState('all');
  const [order, setOrder] = useState('relevance');
  const [startIndex, setStartIndex] = useState();

  return (
    <SearchContext.Provider value={{ inputRef, inputValue, setInputValue, categories, setCategories, order, setOrder, startIndex, setStartIndex }}>
      {children}
    </SearchContext.Provider>
  )
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchContext;