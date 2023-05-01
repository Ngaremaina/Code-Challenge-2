import React from "react";
import { Link } from "react-router-dom";

function BookItem({id, cover, title, price}){
    console.log(id)
    return (
       
        <div class="card">
            <img className="img-card" src={cover} alt={title}/>
            <h2>{title}</h2>
            <p className="price">Kshs. {price}</p>
            <Link className="link" to={`/${id}`}>Show details</Link>
            <div className="btn">
                <button className="button">Add To Cart</button>
            </div>
        </div>
    )

}

export default BookItem