import React from "react";

function BookItem({id, cover, title, price}){
    return (
       
        <div class="card">
            <img className="img-card" src={cover} alt={title}/>
            <h2>{title}</h2>
            <p className="price">Kshs. {price}</p>
            <div class="btn">
                <button>Button</button>
            </div>
        </div>
    )

}

export default BookItem