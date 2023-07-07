import React from "react";
import { useState } from "react";
import '../css/Loginform.css'


export default function Register(){
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [City, setCity] = useState('')


    console.log(Name)
    console.log(Email)
    console.log(City)


    
    return(

        <form className="form">
            <input className='Name' type="text" placeholder="Username" onChange={(e)=> setName(e.target.value)}/>
            <input className='Email' type="email" placeholder="Password" onChange={(f)=> setEmail(f.target.value)} />
            <input className='City' type="text" placeholder="Password" onChange={(g)=> setCity(g.target.value)} />

            <input className='Submit & Register' type='submit' />

        </form>
    )
}