import { useState } from "react";
import { Link, useNavigate } from "react-router";
// import axios from 'axios';
import "../styles/form.scss";
import { useAuth } from "../hooks/useAuth.jsx";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();

    handleLogin(username, password).then((res) => {
      console.log(res);
      navigate("/register");
    });
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form action="" onSubmit={handleFormSubmit}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="link" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
