import { WiDaySnowWind } from "react-icons/wi";
import "../css/App.css"
// eslint-disable-next-line
import { DiReact, DiNodejs, DiJavascript1 } from "react-icons/di";
// import mountainImage from './mountain.jpg';


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
            <button className="Welcome-button"> Load Dashboard</button>
{/* 
            <div className="built-by" > Made using
              <div className="icons"><DiReact /> <DiNodejs /> < DiJavascript1 /> </div>
            </div> */}
            <div className="loader">.</div>

          </div>
        </div>
      </div>
    </>
  )
}
