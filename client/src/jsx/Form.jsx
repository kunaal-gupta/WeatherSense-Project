import React from "react";
import { useState } from "react";
import '../css/form.css'


export default function Login(){
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    console.log(Username)
    console.log(Password)

    
    return(

        <form className="form">
            <input className='Username' type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
            <input className='Password' type="password" placeholder="Password" onChange={(b)=> setPassword(b.target.value)} />
            <input type='submit' />


        </form>
    )
}