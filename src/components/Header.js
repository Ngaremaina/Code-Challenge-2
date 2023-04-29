import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header(){
    return(
        <div class="topnav">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/addbook'>Add Book</Link>
        </div>
    )

}


export default Header