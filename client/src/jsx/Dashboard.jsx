import React from 'react';
import "../css/dashboard.css";
import WindGraph from './Radialbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,  faMoon, faWind, faSnowflake, faCloud, faRainbow, faTint, faCloudSun } from '@fortawesome/free-solid-svg-icons';


function Dashboard() {
	return (
		<>
			<div className="dash-background">
				<div className="dash-section">
					<div className="dash-left-section">

					</div>
					<div className="dash-right-section">
						<div className='dash-right-content'>
							<div className='daily-temp'>
								<div className='temp-boxes'>
								<div><FontAwesomeIcon icon={faSun} size='xl'  style={{ color: '#ff7b00' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Mon</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>
								</div>
								<div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faCloudSun }  size='xl' style={{ color: 'Yellow' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Tues</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>


								</div>							<div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faTint}  size='xl' style={{ color: 'SkyBlue' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Wed</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>


								</div>							<div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faCloud}  size='xl' style={{ color: 'Gray' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Thur</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>


								</div>														<div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faSnowflake}  size='xl' style={{ color: 'white' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Fri</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>


								</div>							<div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faWind}  size='xl'  style={{ color: '#ff7b00' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%'}}>Sat</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>


								</div>

							</div>
							<WindGraph />

						</div>
					</div>

				</div>
			</div>



		</>
	)
}

export default Dashboard;
