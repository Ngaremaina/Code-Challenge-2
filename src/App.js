import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import NewBook from './components/NewBook';
import { Switch, Route } from 'react-router-dom';
import BookDetail from './components/BookDetails';
import EditBook from './components/EditBook';
import Header from './components/Header';
import Contact from './components/Contact';


function App() {
  const [books, setBook] = useState([])
 
  //Fetching data from json file
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:4000/books")
      .then(res => res.json())
      .then(data => setBook(data))
        
      .catch(err => console.error(err));
    }, 1000); //set your time here. repeat every 5 seconds
  
    return () => clearInterval(interval);
  }, []);

  //adding book to the server
  const myBook = (mybook)=>{
    setBook([...books, mybook])
  }
  //  const addMessage = (message) => {
  //   setMessage([...mesages, message])
  //  }
  //searching book by its title
  const searchBook = (search) => {
    const fetchResults = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    return setBook(fetchResults)
  }

  return (
  
    <div className='mybooks'>
      <Header searchBook = {searchBook}/>
      <Switch>
        <Route exact path='/'><BookList books = {books} /></Route>
        <Route exact path='/addbook'><NewBook myBook={myBook} /></Route>
        <Route exact path='/contacts'><Contact /></Route>
        <Route exact path='/:id'><BookDetail /></Route>
        {/* <Route path='/:id'><BookDetail /></Route>
        <Route path='/editbook'><EditBook myBook={myBook}/></Route>
        <Route exact path='/contacts'><Contact /></Route> */}
      </Switch>
      {/* <EditBook /> */}
    </div>
  );
}

export default App;
