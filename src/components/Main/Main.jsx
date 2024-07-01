import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards/Сards';
import '../Main/Main';

export default function Main({ result }) {
  if (!result || result.length === 0) {
    return <div>No books found.</div>;
  }

  return (
    <main className="main-container">
      {result.map((book, index) => (
        <Cards key={index} book={book} />
      ))}
    </main>
  );
}

Main.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      volumeInfo: PropTypes.shape({
        title: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string),
        publisher: PropTypes.string,
        publishedDate: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
        imageLinks: PropTypes.shape({
          thumbnail: PropTypes.string,
        }),
      }),
    })
  ).isRequired,
};
