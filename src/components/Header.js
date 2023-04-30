import React, {useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header({searchBook}){
    const [search, setSearch] = useState("")
    //passing the submit function that listens for the submit event listener
    const handleSubmit = (e) => {
        e.preventDefault()
        //calling the search function
        searchBook(search)
    }
    return(
        <div class="topnav">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/addbook'>Add Book</Link>
            <Link className="nav-link" to='/contact us'>Contact Us</Link>
            <div class="topnav-right">
            <form class="search" id="search" onSubmit={handleSubmit}>
                <input type="text"id="searchname" placeholder="Search by the Book Title"value={search} onChange={e => setSearch(e.target.value)} />
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>  
        </div>
    )

}


export default Header