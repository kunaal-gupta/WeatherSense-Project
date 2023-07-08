import React, { useState } from "react";
import axios from 'axios';
import '../css/Loginform.css'
import { Link, withRouter } from "react-router-dom";

function Login({ history }) {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  // console.log(Username)

  function SendLoginData(event) {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('Submit').style.display = 'none';
    document.getElementById('Register').style.display = 'none';

    event.preventDefault(); // Prevent the default form submission behavior


    console.log(Username, Password)

    const data = { 'Username': Username, 'Password': Password };
    axios.post('http://localhost:5000/loginCredentials', data)
      .then(response => {
        

        console.log(response.data);
        if (response.data === 'successful') {
          history.push("/dashboard"); // Replace "/a" with the desired redirect URL
        } else {
          document.getElementById('loader').style.display = 'none';
          document.getElementById('Submit').style.display = 'block';
          document.getElementById('Register').style.display = 'block';

          document.getElementById('IncorrectIdPwd').style.display = 'block';

        }
      })
      .catch(error => {
        console.error('hi', error);
      });
  }


  return (
    <form className="form" onSubmit={SendLoginData}>
      <input className='Username' type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input className='Password' type="password" placeholder="Password" onChange={(b) => setPassword(b.target.value)} />
      <div className="IncorrectIdPwd" id='IncorrectIdPwd'>Incorrect Username or password</div>
      <input className='Submit' id='Submit' type='submit' />
      <Link to="/register">
        <div className="Register" id='Register'>Not a member? Sign In</div>
      </Link>
      <div className="loader" id='loader'></div>
    </form>
  );
}

export default withRouter(Login);
