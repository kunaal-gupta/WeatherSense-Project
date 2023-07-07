import React from "react";
import { useState } from "react";
import '../css/Register.css'


export default function Register(){
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [City, setCity] = useState('')


    // console.log(Name)
    // console.log(Email)
    // console.log(Password)
    // console.log(City)


    
    return(

        <form className="form">
            <input className='Name' type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
            <input className='Email' type="email" placeholder="Email" onChange={(f)=> setEmail(f.target.value)} />
            <input className='Password' type="password" placeholder="Password" onChange={(f)=> setPassword(f.target.value)} />
            <input className='City' type="text" placeholder="City" onChange={(g)=> setCity(g.target.value)} />

            <input className='RegisterButton' type='submit' value={'Submit & Register'} />

        </form>
    )
}