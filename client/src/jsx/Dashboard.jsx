import React from 'react';
import "../css/dashboard.css";
import WindGraph from './Radialbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faWind, faSnowflake, faCloud, faTint, faCloudSun } from '@fortawesome/free-solid-svg-icons';


function Dashboard() {
	let Lheight = 70;
	let Rheight = 40;

	return (
		<>
			<div className="dash-background">
				<div className="dash-section">
					<div className="dash-left-section">

					</div>
					<div className="dash-right-section">
						<div className='dash-right-content'>
							<div className='daily-right-top-section'>
								<div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faSun} size='xl' style={{ color: '#ff7b00' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Mon</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>
								</div><div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faCloudSun} size='xl' style={{ color: 'Yellow' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Tues</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>


								</div><div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faTint} size='xl' style={{ color: 'SkyBlue' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Wed</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>


								</div><div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faCloud} size='xl' style={{ color: 'Gray' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Thur</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>


								</div><div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faSnowflake} size='xl' style={{ color: 'white' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Fri</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>


								</div><div className='temp-boxes'>
									<div><FontAwesomeIcon icon={faWind} size='xl' style={{ color: '#ff7b00' }} /></div>
									<div style={{ marginTop: '10%', fontSize: '80%' }}>Sat</div>
									<div style={{ marginTop: '1%', fontSize: '80%' }}>12°C</div>


								</div>

							</div>
							<div className='dash-right-bottom-section'>
					
								<div className='thermom-section-left'>
									<div className='thermom' style={{ height: Lheight + '%' }}></div>
								</div>
								{/* <div className='Wind'><WindGraph /></div> */}
								<div className='thermom-section-right'>
									<div className='thermom' style={{ height: Rheight + '%' }}></div>
								</div> 
							</div>


						</div>
					</div>

				</div>
			</div>



		</>
	)
}

export default Dashboard;
