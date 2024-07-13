import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [result, setResult] = useState([]);

  return (
    <BooksContext.Provider value={{ result, setResult }}>
      {children}
    </BooksContext.Provider>
  )
};

BooksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BooksContext;