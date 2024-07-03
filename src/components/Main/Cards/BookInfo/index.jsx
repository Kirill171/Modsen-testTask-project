import React from 'react'
import PropTypes from 'prop-types';
import Header from '../../../Header'
import Button from '../../../Buttons/BackToHomePage'
import './index.css';
import { useLocation } from 'react-router-dom';

export default function BookInfo() {
  const location = useLocation();       // я не знаю почему это не работает, из-за того что невозможно передовать контекст верх, ничего невозможно сделать, только в redux как я понимаю такое возможно сделать, а чтобы обойти это можно заного делать запрос к конкретной книге.
  const { volumeInfo } = location.state || {};
  if (!volumeInfo) {
    return <div className='middle-text'>Volume information not found.</div>;
  }

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
            <h2>{volumeInfo.title}</h2>
            <p>Authors: {volumeInfo.authors.join(', ')}</p>
            <p>Publisher: {volumeInfo.publisher}</p>
            <p>Published Date: {volumeInfo.publishedDate}</p>
            <p>Description: {volumeInfo.description}</p>
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