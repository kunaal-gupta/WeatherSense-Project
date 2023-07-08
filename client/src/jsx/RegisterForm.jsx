import React from "react";
import { useState } from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";


import '../css/Register.css'


function Register({ history }) {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [City, setCity] = useState('')

    function SendLoginData(event) {

        event.preventDefault(); // Prevent the default form submission behavior

        const data = { 'Username': Email, 'Password': Password, 'Name': Name, 'City': City };
        axios.post('http://localhost:5000/registerCredentials', data)
            .then(response => {


                console.log(response.data);
                if (response.data == 'created') {
                    console.log('c')
                    history.push("/dashboard"); // Replace "/a" with the desired redirect URL
                } else if (response.data == 'exists') {
                    document.getElementById('ProfileExists').style.display = 'block';
                    console.log('e')

                }
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (

        <form className="form" onSubmit={SendLoginData} >
            <input className='Name' type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
            <input className='Email' type="email" placeholder="Email" required onChange={(f) => setEmail(f.target.value)} />
            <input className='Password' type="password" placeholder="Password" required onChange={(f) => setPassword(f.target.value)} />
            <input className='City' type="text" placeholder="City" required onChange={(g) => setCity(g.target.value)} />

            <input className='RegisterButton' type='submit' value={'Submit & Register'} />
            <div className="ProfileExists"> Profile already exists</div>

            <div className="loader" id='loader'></div>

        </form>
    )
}

export default withRouter(Register);
