import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function NewBook({addBook}){
    const navigate = useHistory()
    //declaring our variables
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [author, setAuthor] = useState("")
    const [published, setPublished] = useState("")
    const [publisher, setPublisher] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [sold, setSold] = useState("")
    const [description, setDescription] = useState("")
    const [cover, setCover] = useState("")
    const [pages, setPages] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        //creating our object to hold the data
        const newbook = {
            title:title,
            subtitle:subtitle,
            author:author,
            published:published,
            publisher:publisher,
            price:price,
            quantity:quantity,
            sold:sold,
            description:description,
            pages:pages,
            cover:cover
        }
        //adding our object to the server
        fetch("http://localhost:4000/books",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newbook)
        })
        .then(res => res.json())
        .then(data => addBook(data))

        setInputClear()
        //navigarte user to the home page
        navigate.push('/');
        
        
    }
    //set the input fiels to an empty string
    function setInputClear(){
        setCover("")
        setTitle("")
        setSubtitle("")
        setAuthor("")
        setPrice("")
        setQuantity("")
        setSold("")
        setPages("")
        setPublisher("")
        setPublished("")
        setDescription("")
        
    }
    //display the form 
    return (
        <form className="addBook" onSubmit={handleSubmit}>
           <h1 style={{textAlign:"center"}}>Add Book</h1>
           <label for="cover">Cover</label>
            <input type="text" className="form-control" id="cover" value = {cover} placeholder="https://www.jkrowling.com/wp-content/uploads/2016/10/HPATPS_Hero_OnGrey.png" onChange={e => setCover(e.target.value)}/>

            <label for="title" >Title</label>
            <input type="text" id="title" value={title} placeholder="Harry Potter and the Philosopher's Stone" onChange={e => setTitle(e.target.value)}/>

            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" value={subtitle} placeholder="An edition of Harry Potter and the Philosopher's Stone" onChange={e => setSubtitle(e.target.value)}/>

            <label for="author">Author</label>
            <input type="text" id="author" value={author} placeholder="J. K. Rowling" onChange={e => setAuthor(e.target.value)}/>

            <label for="price" >Price</label>
            <input type="number" id="price" value={price} placeholder="1000" onChange={e => setPrice(e.target.value)}/>

            <label for="quantity" >Total Number of Books</label>
            <input type="number" id="quantity" value={quantity} placeholder="250" onChange={e => setQuantity(e.target.value)}/>

            <label for="sold" >Books Sold</label>
            <input type="number" id="sold" value={sold} placeholder="200" onChange={e => setSold(e.target.value)}/>

            <label for="description" >Description</label>
            <input type="text" id="description" value={description} placeholder=" Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry...." onChange={e => setDescription(e.target.value)}/> 

            <label for="published" >Publish Date</label>
            <input type="date" id="published" value={published} onChange={e => setPublished(e.target.value)}/>

            <label for="publisher">Publisher</label>
            <input type="text"  id="publisher" value={publisher} placeholder="Animus Kiadó" onChange={e => setPublisher(e.target.value)}/>

            <label for="pages" >Pages</label>
            <input type="number" id="pages" value={pages} placeholder="205" onChange={e => setPages(e.target.value)}/>

            <button class="submit" type="submit">Submit</button>
        </form>     
    )

}

export default NewBook