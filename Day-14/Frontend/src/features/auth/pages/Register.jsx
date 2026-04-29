import { useState } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import '../styles/form.scss'

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleForomSubmit(e){

        e.preventDefault();

        axios.post("http://localhost:3000/api/register",{
            username,
            email,
            password
        },{
            withCredentials: true
        })
        .then(res =>{

            console.log(res.data);
        })
    }

  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form action="" onSubmit={handleForomSubmit}>
                <input 
                    onInput={(e) => {setUsername(e.target.value)}}
                    type="text" 
                    name="username" 
                    placeholder="Enter username" />
                <input 
                    onInput={(e) => {setEmail(e.target.value)}}
                    type="email" 
                    name="email" 
                    placeholder="Enter email" />
                <input 
                    onInput={(e) => {setPassword(e.target.value)}}
                    type="password" 
                    name="password" 
                    placeholder="Enter Password" />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link className='link' to="/login">Login</Link></p>
        </div>
    </main>
  )
}

export default Register
