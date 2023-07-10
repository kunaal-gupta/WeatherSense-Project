import { WiDaySnowWind } from "react-icons/wi";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "../css/Home.css";
import "../css/Login.css";


function LoginData({ history }) {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')


  function SendLoginData(event) {
    document.getElementById('Loginloader').style.display = 'block';
    document.getElementById('Submit').style.display = 'none';
    document.getElementById('Register').style.display = 'none';

    event.preventDefault(); // Prevent the default form submission behavior



    const data = { 'Username': Username, 'Password': Password };
    axios.post('http://localhost:5000/loginCredentials', data)
      .then(response => {

        console.log(Username, Password)

        if (response.data === 'successful') {

          axios.post('http://localhost:5000/activeUsers', data)
            .then(response => {

              if (response.data === 'added') {
                console.log('client: added to active list')
              }
            })
            .catch(error => {
              console.error(error);
            });


          history.push("/dashboard"); // Replace "/a" with the desired redirect URL


        } else {
          document.getElementById('Loginloader').style.display = 'none';
          document.getElementById('Submit').style.display = 'block';
          document.getElementById('Register').style.display = 'block';

          document.getElementById('IncorrectIdPwd').style.display = 'block';

        }
      })
      .catch(error => {
        console.error(error);
      });

  }

  return (
    <form className="Loginform" onSubmit={SendLoginData}>
      <input className='LoginUsername' type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
      <input className='LoginPassword' type="password" placeholder="Password" required onChange={(b) => setPassword(b.target.value)} />
      <div className="IncorrectIdPwd" id='IncorrectIdPwd'>Incorrect Username or password</div>
      <input className='Submit' id='Submit' type='submit' />
      <Link to="/register">
        <div className="Register" id='Register'>Not a member? Sign In</div>
      </Link>
      <div className="Loginloader" id='Loginloader'></div>
    </form>
  );
}



const LoginWithRouter = withRouter(LoginData);


export default function LoadLoginPage() {

  return (

    <>
      <div className="background">
        <div className="Welcome-section">
          <div className="welcome-empty-section">
            < WiDaySnowWind className="WeatherIcon" />

          </div>
          <div className="Welcome-heading">
            <div className="heading"> Welcome to Weather<span style={{ color: 'White' }}>Sense</span></div>
            <div id="login">
              <LoginWithRouter />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
