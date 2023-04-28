import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import NewBook from './components/NewBook';


function App() {
  const [books, setBook] = useState([])
 
  //Fetching data from json file
  useEffect(() => {
    fetch("http://localhost:4000/books")
    .then(res => res.json())
    .then(data => setBook(data))
  },[])


  //adding book to the server
  const addBook = (newbook)=>{
    setBook([...books, newbook])
  }

  return (
  
    <div className='mybooks'>
      <BookList books = {books} />
      <NewBook addBook={addBook}/>

    </div>
  );
}

export default App;
