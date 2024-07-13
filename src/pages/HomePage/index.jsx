import React, { useContext } from 'react';
import Header from '@components/Header';
import Main from '@components/Main';
import BooksContext from '@context/BooksContext';
import LoadingContext from '@context/LoadingContext';
import HomePageContext from '@context/HomePageContext';

export default function HomePage() {
  const { result, setResult } = useContext(BooksContext);
  const { loading, setLoading } = useContext(LoadingContext)
  const { isHomePage } = useContext(HomePageContext);
 

  return (
    <>
      <Header setResult={setResult} setLoading={setLoading} />
      <Main result={result} loading={loading} isHomePage={isHomePage} />
    </>
  )
}
