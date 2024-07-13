import React, { useContext } from 'react'
import Button from '@components/Buttons/BackToHomePage'
import './index.css';
import BookContext from '@context/BookContext';

export default function BookInfo() {
  const { selectedBook } = useContext(BookContext);

  if (!selectedBook) {
    return <div>Loading...</div>;
  }

  const { volumeInfo } = selectedBook;

  return (
    <div>
      <Button />
      <section className='main-content'>
        <div className='preview-img'>
          {volumeInfo && volumeInfo.imageLinks && (
            <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title || 'Book Thumbnail'} />
          )}
        </div>
        <div className='description'>
          <div className="book-info">
            <p className='categories'>{volumeInfo?.categories ? volumeInfo.categories.join(', ') : 'Unknown'}</p>
            <h2>{volumeInfo?.title || 'Unknown Title'}</h2>
            <p className='author'>{volumeInfo?.authors ? volumeInfo.authors.join(', ') : 'Unknown'}</p>
            <p className='descriptionBlock'>{volumeInfo?.description}</p>
            <p>Publisher: {volumeInfo?.publisher}</p>
            <p>Published Date: {volumeInfo?.publishedDate}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
