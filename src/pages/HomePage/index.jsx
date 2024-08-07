import React, { useContext } from 'react';
import Header from '@components/Header';
import Main from '@components/Main';
import BooksContext from '@context/BooksContext';
import LoadingContext from '@context/LoadingContext';
import HomePageContext from '@context/HomePageContext';
import SearchContext from '@context/SearchContext';

export default function HomePage() {
  const { result, setResult } = useContext(BooksContext);
  const { loading, setLoading } = useContext(LoadingContext)
  const { isHomePage, isBookInfoPage } = useContext(HomePageContext);
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


      <Main   result={result} 
              loading={loading}
              isHomePage={isHomePage} 
              isBookInfoPage={isBookInfoPage} 
              inputValue={inputValue} 
              startIndex={startIndex} 
              setStartIndex={setStartIndex} />
    </>
  )
}
