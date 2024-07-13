import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import BookInfoPage from '@pages/BookInfoPage';
import { BookProvider } from '@context/BookContext';
import { BooksProvider } from '@context/BooksContext';
import { LoadingProvider } from '@context/LoadingContext';
import { HomePageProvider } from '@context/HomePageContext';

const AppProviders = ({ children }) => (
  <BooksProvider>
    <BookProvider>
      <LoadingProvider>
        <HomePageProvider>
          {children}
        </HomePageProvider>
      </LoadingProvider>
    </BookProvider>
  </BooksProvider>
);

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BookInfo" element={<BookInfoPage />} />
        </Routes>
      </AppProviders>
    </BrowserRouter>
  );
}