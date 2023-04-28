import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';


function App() {
  const [books, setBook] = useState([])
 
  //Fetching data from json file
  useEffect(() => {
    fetch("http://localhost:4000/books")
    .then(res => res.json())
    .then(data => setBook(data))
  },[])

  


  return (
  
    <div className='mybooks'>
     <BookList books = {books} />

    </div>
  );
}

export default App;
