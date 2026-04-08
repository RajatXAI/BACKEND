import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const [ notes, setNotes ] = useState([]);

  // console.log("hello")

  function fetchNotes(){

    axios.get("http://localhost:3000/api/notes")
    .then((res) =>{
      setNotes(res.data.notes);
    })
  }
  
  function handleSubmit(e){

    e.preventDefault()

    const {userName, email} = e.target.elements
    // console.log(userName.value, email.value)

    axios.post("http://localhost:3000/api/notes",{
      userName:userName.value,
      email:email.value,
    })
    .then(res =>{

      console.log(res.data)

      fetchNotes();

    })
  }

  function handleDeleteNote(noteId){
    
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res =>{
      console.log(res.data)
      fetchNotes();
    })
  }

  function handleUpdateNote(noteId){


    const userName = prompt("Enter user name");
    const newEmail = prompt("Enter new email");

    axios.patch("http://localhost:3000/api/notes/"+noteId,{
        email: newEmail,
        userName:userName
    })
    .then(res =>{
      console.log(res.data)
      fetchNotes()
    })
  }

  
  useEffect(()=>{
    
    fetchNotes();
    
  }, [])
  

  return (
    <>

      <form className="notes-create-form" onSubmit={handleSubmit}>
        <input name="userName" type="text" placeholder="Enter Username" />
        <input name="email" type="email" placeholder="Enter your email" />
        <button>Create note</button>
      </form>

      <div className="notes">
        {
          notes.map(note =>{
            return <div className="note">
            <h3>{note.userName}</h3>
            <p>{note.email}</p>
            <button onClick={() =>{handleDeleteNote(note._id)}}>delete note</button>
            <button onClick={() =>{handleUpdateNote(note._id)}}>Update email</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
