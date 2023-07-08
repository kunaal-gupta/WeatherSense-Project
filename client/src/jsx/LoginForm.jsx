import React, { useState } from "react";
import axios from 'axios';
import '../css/Loginform.css'
import { Link } from "react-router-dom";

export default function Login() {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  // console.log(Username)

  function SendLoginData(event) {
        // event.preventDefault(); // Prevent the default form submission behavior


    console.log(Username, Password)

    const data = { 'Username': Username, 'Password': Password };
    axios.post('http://localhost:5000/loginCredentials', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('hi', error);
      });
  }


  return (
    <form className="form" onSubmit={SendLoginData}>
      <input className='Username' type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input className='Password' type="password" placeholder="Password" onChange={(b) => setPassword(b.target.value)} />
      <input className='Submit' type='submit' />
      <Link to="/register">
        <div className="Register">Not a member? Sign In</div>
      </Link>
    </form>
  );
}
