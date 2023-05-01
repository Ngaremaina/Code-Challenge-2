import React from "react";
import BookItem from "./BookItem";

function BookList({books, sortByTitle,ondeleteBook}){
    //sending data to the BookItem component
    const displayBooks = books.map(book => {
        return <BookItem key={book.id} id={book.id} cover={book.cover} title={book.title} price={book.price} ondeleteBook = {ondeleteBook} sortByTitle={sortByTitle}/>
    })
    //display cards
    return (
        <div className="card-body">
            {displayBooks}
        </div>  
    )

}

export default BookList