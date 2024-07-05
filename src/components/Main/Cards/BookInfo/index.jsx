import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import Header from '../../../Header'
import Button from '../../../Buttons/BackToHomePage'
import './index.css';
import BookContext from '../../../Context/BookContext';

export default function BookInfo() {
  const { selectedBook } = useContext(BookContext);

  if (!selectedBook) {
    return <div>Loading...</div>;
  }

  const { volumeInfo } = selectedBook || location.state || {};

  return (
    <div>
      <Button />
      <Header />
      <section className='main-content'>
        <div className='preview-img'>
          <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title || 'Book Thumbnail'} />
        </div>
        <div className='description'>
          <div className="book-info">
            <p className='categories'>{volumeInfo?.categories ? volumeInfo.categories.join(', ') : 'Unknown'}</p>
            <h2>{volumeInfo.title}</h2>
            <p className='author'>{volumeInfo.authors.join(', ')}</p>
            <p className='descriptionBlock'>{volumeInfo.description}</p>
            <p>Publisher: {volumeInfo.publisher}</p>
            <p>Published Date: {volumeInfo.publishedDate}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

BookInfo.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
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
    }),
  }).isRequired,
};