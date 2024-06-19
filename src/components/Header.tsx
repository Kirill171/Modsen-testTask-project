import React, { useRef, useState } from 'react'
import searchImage from '../img/search.png'; // Не удается найти модуль "../img/search.png" или связанные с ним объявления типов.ts(2307)

export default function Header() {
  let inputRef = useRef<HTMLInputElement | null>(null);
  const API = 'AIzaSyCe3Tpi301Vj3z9HPTvLTuWXzEQkpq0goA';
  const [book, setBook] = useState();
  const [result, setResult] = useState([]);


  // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
  function searchBook() {
    const searchedBook = inputRef.current?.value;
    setBook(searchedBook);
    console.log(result);
    
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${API}`)
          .then(response => response.json())
          .then(data => setResult(data));
  }

  return (
    <header>
      <div className='text'>Search for books</div>
      
      <div className='inputDiv'>
        <input placeholder='Search for Books' ref={inputRef} onChange={searchBook} />
        <img className='searchImage' src={searchImage} alt='Фото лупы'/>
      </div>

      <div className='categoriesAndSortingBy'>
        <label htmlFor='categories'>Categories</label>
        <select id='categories'>
          <option value='0'>all</option>
          <option value='1'>art</option>
          <option value='2'>biography</option>
          <option value='3'>computers</option>
          <option value='4'>history</option>
          <option value='5'>medical</option>
          <option value='6'>poetry</option>
        </select>

        <label htmlFor='sortingBy'>Sorting by</label>
        <select id='sortingBy'>
          <option value='0'>relevance</option>
          <option value='1'>newest</option>
        </select>
      </div>
    </header>
  )
}
