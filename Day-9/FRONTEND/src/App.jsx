import { useState } from 'react'
import axios from "axios"

function App() {

  const [ notes, setNotes ] = useState([ 
    {
      userName : "useName",
      email : "email"
    },

    {
      userName : "useName",
      email : "email"
    },

  ])

  axios.get("http://localhost:3000/api/notes")
  .then((res) =>{
    setNotes(res.data.note)
  })

  return (
    <>
      <div className="notes">
        {
          notes.map(note =>{
            return <div className="note">
            <h3>{note.userName}</h3>
            <p>{note.email}</p>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
