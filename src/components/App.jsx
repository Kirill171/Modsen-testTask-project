import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import BookInfoPage from '@pages/BookInfoPage';
import { BookProvider } from '@context/BookContext';
import { BooksProvider } from '@context/BooksContext';
import { SearchProvider } from '@context/SearchContext';
import { LoadingProvider } from '@context/LoadingContext';
import { HomePageProvider } from '@context/HomePageContext';

const AppProviders = ({ children }) => (
  <BooksProvider>
    <BookProvider>
      <SearchProvider>
        <LoadingProvider>
          <HomePageProvider>
            {children}
          </HomePageProvider>
        </LoadingProvider>
      </SearchProvider>
    </BookProvider>
  </BooksProvider>
);

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function App() {
  return (
    <HashRouter>
      <AppProviders>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-info" element={<BookInfoPage />} />
        </Routes>
      </AppProviders>
    </HashRouter>
  );
}