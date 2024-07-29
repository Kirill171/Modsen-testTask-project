import React, { useContext } from 'react';
import BookInfo from '@components/Main/Cards/BookInfo';
import Header from '@components/Header';
import BooksContext from '@context/BooksContext';
import LoadingContext from '@context/LoadingContext';
import SearchContext from '@context/SearchContext';

export default function BookInfoPage() {
  const { setResult } = useContext(BooksContext);
  const { setLoading } = useContext(LoadingContext);
  const { inputRef, inputValue, setInputValue, categories, setCategories, order, setOrder, startIndex, setStartIndex } = useContext(SearchContext);

  return (
    <> 
      <Header setResult={setResult} setLoading={setLoading} inputRef={inputRef} inputValue={inputValue} setInputValue={setInputValue} categories={categories} setCategories={setCategories} order={order} setOrder={setOrder} startIndex={startIndex} setStartIndex={setStartIndex} />
      <BookInfo />
    </>
  )
}
