import { WiDaySnowWind } from "react-icons/wi";
import "./App.css"

export default function Home() {
    return (
      <>
      <div className="background">
        <div className="Welcome-section">
          <div className="welcome-empty-section">
          < WiDaySnowWind className="WeatherIcon"/>
          </div>
          <div className="Welcome-heading">
            <div> Welcome to TempDashboard ReaXpress </div>
            <button className="Welcome-button"> Load Dashboard</button>
            {/* <i className='fas fa-cloud-moon-rain'></i> */}
  
          </div>
        </div>
        </div>
      </>
    )
  }
  