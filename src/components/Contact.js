import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Contact({addMessage}){
    const navigate = useHistory()

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const newmessage = {
            name:name,
            email:email,
            message:message,
        }

        fetch(" http://localhost:4000/messages",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newmessage)
        })
        .then(res => res.json())
        .then(data => addMessage(data))
        setInputClear()

        navigate.push('/');
    }
    function setInputClear(){
        setName("")
        setMessage("")
        setEmail("")
        
    }
    return (
        <form className="addBook" onSubmit={handleSubmit}>
           <h1 style={{textAlign:"center"}}>Contact Us</h1>
           <label for="name">Name</label>
            <input type="text" id="name" value = {name} placeholder="John Doe" onChange={e => setName(e.target.value)}/>

            <label for="email">Email</label>
            <input type="text" id="email" value={email} placeholder="johndoe@example.com" onChange={e => setEmail(e.target.value)}/>

            <label for="subtitle">Message</label>
            <textarea type="text" id="message" value={message} placeholder="Message..." onChange={e => setMessage(e.target.value)}></textarea>

            <button class="submit" type="submit">Submit</button>

        </form>

    )
}

export default Contact