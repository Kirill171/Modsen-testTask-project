import React, { useContext } from 'react';
import Header from '@components/Header';
import BookInfo from '@components/Main/Cards/BookInfo';
import BooksContext from '@context/BooksContext';
import LoadingContext from '@context/LoadingContext';
import HomePageContext from '@context/HomePageContext';
import SearchContext from '@context/SearchContext';

export default function BookInfoPage() {
  const { setResult } = useContext(BooksContext);
  const { setLoading } = useContext(LoadingContext);
  const { isBookInfoPage } = useContext(HomePageContext);
  const { inputValue, setInputValue, categories, setCategories, order, setOrder, startIndex, setStartIndex } = useContext(SearchContext);

  return (
    <> 
      <Header setResult={setResult} 
              setLoading={setLoading}
              isBookInfoPage={isBookInfoPage} 
              inputValue={inputValue} 
              setInputValue={setInputValue} 
              categories={categories} 
              setCategories={setCategories} 
              order={order} 
              setOrder={setOrder} 
              startIndex={startIndex} 
              setStartIndex={setStartIndex} />
      
      <BookInfo />
    </>
  )
}
