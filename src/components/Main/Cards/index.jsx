import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Link } from 'react-router-dom';

const Cards = ({ book, setSelectedBook }) => {
  const { volumeInfo } = book || {};

  function handleClick() {
    setSelectedBook(book);
  }
  return (
    <Link className='link' to='./Main/Cards/BookInfo' onClick={handleClick}>
        <div className="book-card">
          <img src={volumeInfo?.imageLinks?.thumbnail} alt={volumeInfo?.title || 'Book Thumbnail'} />
          <p className='categories'>{volumeInfo?.categories ? volumeInfo.categories.join(', ') : 'Unknown'}</p>
          <h2>{volumeInfo?.title || 'Unknown Title'}</h2>
          <p>{volumeInfo?.authors ? volumeInfo.authors.join(', ') : 'Unknown'}</p>
        </div>
    </Link>
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
  setSelectedBook: PropTypes.func.isRequired,
};

export default Cards;
