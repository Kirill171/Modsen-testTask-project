import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';  // Импорт CSS файла

const Cards = ({ book }) => {
  const { volumeInfo } = book || {};

  return (
    <div className="book-card">
      <h2>{volumeInfo?.title || 'Unknown Title'}</h2>
      <p>Authors: {volumeInfo?.authors ? volumeInfo.authors.join(', ') : 'Unknown'}</p>
      <p>Publisher: {volumeInfo?.publisher || 'Unknown'}</p>
      <p>Published Date: {volumeInfo?.publishedDate || 'Unknown'}</p>
      <p>Categories: {volumeInfo?.categories ? volumeInfo.categories.join(', ') : 'Unknown'}</p>
      <p>Description: {volumeInfo?.description || 'No description available'}</p>
      <img src={volumeInfo?.imageLinks?.thumbnail} alt={volumeInfo?.title || 'Book Thumbnail'} />
    </div>
  );
};

Cards.propTypes = {
  book: PropTypes.shape({
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
  }).isRequired,
};

export default Cards;
