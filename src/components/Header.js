import React, {useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header({searchBook, sortByTitle}){
    //declaring our variables
    const [search, setSearch] = useState("")
    //passing the submit function that listens for the submit event listener
    const handleSubmit = (e) => {
        e.preventDefault()
        //calling the search function
        searchBook(search)
    }
    //displaying the header
    return(
        <div class="topnav">
            {/* creating the navigation links */}
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/addbook'>Add Book</Link>
            <Link className="nav-link" to='/contact us'>Contact Us</Link>
            {/* creating button that will sort the books by category */}
            <button className="buttonTitle" onClick={sortByTitle} style={{float: 'right'}}><i class="fa fa-sort"></i></button>
            <div class="topnav-right">
                {/* display the search form */}
                <form class="search" id="search" onSubmit={handleSubmit}>
                    <input type="text"id="searchname" placeholder="Search by the Book Title"value={search} onChange={e => setSearch(e.target.value)} />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            
            </div>  
        </div>
    )

}


export default Header