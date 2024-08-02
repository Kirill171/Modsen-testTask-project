import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import './index.css'

export default function Main({ result, loading, isHomePage, isBookInfoPage, startIndex, setStartIndex }) {  
  const handleLoadMore = () => {
    const newStartIndex = startIndex + 20;
    setStartIndex(newStartIndex);
  };
  
  return (
    <>
      {loading && result.length === 0 && <div className='middle-text'>Loading...</div>}
      {isHomePage && (!result || result.length === 0) && !loading && <div className='middle-text'>No books found.</div>}
      {isHomePage && result.length > 0 && <div className='middle-text'>Found books: {result.length}</div>}
      <main className="main-container">
        {result.map((book, index) => (
          <Cards key={index} book={book} />
        ))}
      </main>
      {loading && result.length > 0 && <div className='middle-text'>Loading more...</div>}
      {!loading && result.length > 0 && <button onClick={handleLoadMore} disabled={isBookInfoPage} className='load-more-button'>Load More</button>}
    </>
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
  loading: PropTypes.bool.isRequired,
  isHomePage: PropTypes.bool.isRequired,
  isBookInfoPage: PropTypes.bool.isRequired,
  startIndex: PropTypes.number.isRequired,
  setStartIndex: PropTypes.func.isRequired,
};
