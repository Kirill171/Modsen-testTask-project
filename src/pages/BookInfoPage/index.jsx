import React, { useContext } from 'react';
import BookInfo from '@components/Main/Cards/BookInfo';
import Header from '@components/Header';
import BooksContext from '@context/BooksContext';
import LoadingContext from '@context/LoadingContext';

export default function BookInfoPage() {
  const { setResult } = useContext(BooksContext);
  const { setLoading } = useContext(LoadingContext)

  return (
    <> 
      <Header setResult={setResult} setLoading={setLoading} />
      <BookInfo />
    </>
  )
}
