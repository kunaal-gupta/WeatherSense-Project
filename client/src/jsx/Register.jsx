import { WiDaySnowWind } from "react-icons/wi";
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";
import React, {useState } from 'react';

import "../css/Home.css"
import "../css/Register.css";


function RegisterData({ history }) {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [City, setCity] = useState('')

  function SendRegisterData(event) {
    document.getElementById('Registerloader').style.display = 'block';
    document.getElementById('RegisterButton').style.display = 'none';


      event.preventDefault(); // Prevent the default form submission behavior

      const data = { 'Username': Email, 'Password': Password, 'Name': Name, 'City': City };
      axios.post('http://localhost:5000/registerCredentials', data)
          .then(response => {

              console.log(response.data);
              if (response.data === 'created') {
                  history.push("/login"); // Replace "/a" with the desired redirect URL
              } else if (response.data === 'exists') {
                  document.getElementById('ProfileExists').style.display = 'block';
                  document.getElementById('Registerloader').style.display = 'none';
                  document.getElementById('RegisterButton').style.display = 'block';



              }
          })
          .catch(error => {
              console.error(error);
          });
  }
  return (

      <form className="Registerform" onSubmit={SendRegisterData} >
          <input className='RegName' type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
          <input className='RegEmail' type="email" placeholder="Email" required onChange={(f) => setEmail(f.target.value)} />
          <input className='RegPassword' type="password" placeholder="Password" required onChange={(f) => setPassword(f.target.value)} />
          <input className='RegCity' type="text" placeholder="City" required onChange={(g) => setCity(g.target.value)} />
          <Link to="/login">

          <div className="ProfileExists" id="ProfileExists"> Profile already exists. Log in</div>
          </Link>

          <input className='RegisterButton' id='RegisterButton' type='submit' value={'Submit & Register'} />

          <div className="Registerloader" id='Registerloader'></div>

      </form>
  )
}

const RegisterWithRouter = withRouter(RegisterData);


export default function LoadRegisterPage() {

  return (

    <>
      <div className="background">
        <div className="Welcome-section">
          <div className="welcome-empty-section">
            < WiDaySnowWind className="WeatherIcon" />

          </div>
          <div className="Welcome-heading">
            <div className="heading"> Welcome to Weather<span style={{ color: 'White' }}>Sense</span></div>
    
            <div id="register">
              < RegisterWithRouter />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
