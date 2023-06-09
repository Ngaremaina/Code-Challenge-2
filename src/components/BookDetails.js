import React, { useState,useEffect } from "react";
import { useParams,useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function BookDetail(){
    //declaring the variables
    const [book, setBook] = useState("");
    const history = useHistory()
    const {title, subtitle, author, published, publisher, pages, price, quantity, sold, description, cover} = book
    const { id } = useParams()

    //fetching data by the id
    useEffect(() => {
        fetch(`http://localhost:4000/books/${id}`)
        .then(r => r.json())
        .then(data => {
            setBook(data)})
    }, [id])

    //deleting the book
    function handleDelete(){
        fetch(`http://localhost:4000/books/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(data => setBook(data))
        history.push('/')
    }
    
    //rendering the details of the book
    return(
        
        <div className="details">
            <div>
                <img style={{maxHeight:"502px", maxWidth:"450px", float:"left",marginRight:"20px"}} src={cover} alt={title}/>
            </div>
            <div className="col-sm-8">
                <p style={{marginTop:"20px"}}>{title}</p>
                <p>{subtitle}</p>
                <p>by {author}</p>
                <p>Kshs. {price}</p>
                <p>Available copies: {quantity - sold}</p>
                <p>Description</p>
                <p>{description}</p>
                <p>Publish Date: {published}</p>
                <p>Publisher: {publisher}</p>
                <p>{pages} pages </p>
                
                <button type="button" className="addtocart" style={{marginBottom:"30px"}}>Add To Cart</button>
                
                
            </div> 
            <Link className = "detail-link" to={`/editbook/${id}`}>Edit Book</Link>
            <button className="delete" onClick={handleDelete}>Delete Book</button> 
                
            
        </div>
            
       
    )

}

export default BookDetail