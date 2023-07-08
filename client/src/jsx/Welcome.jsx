import { WiDaySnowWind } from "react-icons/wi";
import { Link } from "react-router-dom";
import Login from "./LoginForm.jsx";
import Register from "./RegisterForm.jsx";
import "../css/Home.css"
import React, { useEffect } from 'react';



export default function LoadWelcome() {

  return (

    <>
      <div className="background">
        <div className="Welcome-section">
          <div className="welcome-empty-section">
            < WiDaySnowWind className="WeatherIcon" />

          </div>
          <div className="Welcome-heading">
            <div> Welcome to Weather<span style={{ color: 'White' }}>Sense</span></div>

            
            <Link to="/login">
              <button className="Welcome-button">Load Dashboard</button>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}
