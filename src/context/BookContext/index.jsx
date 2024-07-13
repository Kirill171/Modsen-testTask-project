import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <BookContext.Provider value={{ selectedBook, setSelectedBook }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BookContext;