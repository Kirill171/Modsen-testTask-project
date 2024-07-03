import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import BookInfo from './Main/Cards/BookInfo';
// import Main from './Main/Main';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Main/Cards/BookInfo" element={<BookInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
