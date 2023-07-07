import { WiDaySnowWind } from "react-icons/wi";
import { Link } from "react-router-dom";
import Login from "./LoginForm.jsx";
import Register from "./RegisterForm.jsx";
import "../css/App.css"


export default function Home() {
  return (

    <>
      <div className="background">
        <div className="Welcome-section">
          <div className="welcome-empty-section">
            < WiDaySnowWind className="WeatherIcon" />

          </div>
          <div className="Welcome-heading">
            <div> Welcome to Weather<span style={{ color: 'White' }}>Sense</span></div>
            < Login />
            {/* <Link to="/dashboard">
              <button className="Welcome-button">Load Dashboard</button>
            </Link>            */}
             <div className="loader"></div>

          </div>
        </div>
      </div>
    </>
  )
}
