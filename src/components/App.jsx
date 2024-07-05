import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import BookInfo from './Main/Cards/BookInfo';
// import Main from './Main/Main';
import { BookProvider } from './Context/BookContext'

export default function App() {
  return (
    <BrowserRouter>
      <BookProvider>
        <div>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Main/Cards/BookInfo" element={<BookInfo />} />
          </Routes>
        </div>
      </BookProvider>
    </BrowserRouter>
  );
}