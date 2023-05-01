import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import NewBook from './components/NewBook';
import { Switch, Route } from 'react-router-dom';
import BookDetail from './components/BookDetails';
import EditBook from './components/EditBook';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [books, setBook] = useState([])
 
  //Fetching data from json file
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:4000/books")
      .then(res => res.json())
      .then(data => setBook(data))
        
      .catch(err => console.error(err));
    }, 2500); //set your time here. repeat every 5 seconds
  
    return () => clearInterval(interval);
  }, []);

  //adding book to the server
  const addBook = (newbook)=>{
    setBook([...books, newbook])
  }
 
  const editBook = (editbook) => {
    setBook([...books, editbook])
  }
  //searching book by its title
  const searchBook = (search) => {
    const fetchResults = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    return setBook(fetchResults)
  }


  //Sorting the books by title
  function sortByTitle() {
    const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
    setBook(sortedBooks);
  }

  return (
  
    <div className='mybooks'>
      <Header searchBook = {searchBook} sortByTitle={sortByTitle}/>
      <Switch>
        <Route exact path='/'><BookList books = {books} /></Route>
        <Route exact path='/addbook'><NewBook addBook={addBook} /></Route>
        <Route exact path='/contact us'><Contact /></Route>
        <Route exact path='/:id'><BookDetail /></Route>
        <Route exact path='/editbook/:id'><EditBook myBook={editBook} /></Route>
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
