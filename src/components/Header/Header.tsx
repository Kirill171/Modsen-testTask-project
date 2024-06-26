import React, { useRef, useState } from 'react';
import Filter from './Filter/Filter';
import searchImage from '@assets/search.png';


// WARNING in ./src/components/Header/Header.tsx
// Module Warning (from ./node_modules/eslint-loader/dist/cjs.js):

// D:\Projects\Modsen-testTask-project\src\components\Header\Header.tsx
//   20:44  error  Parsing error: Unexpected token ]

// ✖ 1 problem (1 error, 0 warnings)

// Меня задушила уже эта ошибка, я без понятия откуда она взялась, да её невозможно исправить, я уже 40 раз перекопал все конфигурации.

export default function Header() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [query, setQuery] = useState<string>('');
  const [result, setResult] = useState<any[]>([]); // тут всё нормамльно, я не знаю чего eslint докапался :(
  const [categories, setCategories] = useState<string>('all');
  const [order, setOrder] = useState<string>('relevance');


  // https://www.googleapis.com/books/v1/volumes?q=
  async function searchBooks(value?: string) {
    const queryValue = inputRef.current?.value || '';
    setQuery(queryValue);

    if (value) {
      if (value === 'all' || value === 'art' || value === 'biography' || value === 'computers' || value === 'history' || value === 'medical' || value === 'poetry') {
        setCategories(value);
      } else if (value === 'relevance' || value === 'newest') {
        setOrder(value);
      }
    }
    
    console.log(value);
    
    console.log(categories);

    try {
      let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${order}`;
      const response = await fetch(url);
      const data = await response.json();
      setResult(data.items);

      console.log(result);

    } catch (error) {
      console.error('Error fetching books', error);
    }
  }

  return (
    <header>
      <div className='text'>Search for books</div>

      <div className='inputDiv'>
        <input placeholder='Search for Books' ref={inputRef} onChange={e => searchBooks()} />
        <img className='searchImage' src={searchImage} alt='Фото лупы' />
      </div>

      <Filter searchBooks={searchBooks} />
    </header>
  )
}