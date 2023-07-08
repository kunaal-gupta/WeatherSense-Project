import React from 'react';
import "../css/dashboard.css";
import WindGraph from './Radialbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faWind, faSnowflake, faCloud, faTint, faCloudSun, faClock, faTemperature0, faTemperatureFull } from '@fortawesome/free-solid-svg-icons';


function Dashboard() {
	let Lheight = 70;
	let Rheight = 40;

	let Longitude = -113.5;
	let Latitude = 53.55;

	let Pressure = 5;
	let Visibility = 4;
	let Gust = 6;

	let Temp = 20;

	const currentTime = new Date();
	const currentHour = currentTime.getHours();
	const currentMinute = currentTime.getMinutes();
	const currentSecond = currentTime.getSeconds();

	function PressureChange() {
		const unitDiv = document.getElementById('pUnit');
		const valDiv = document.getElementById('pressVal');

		if (unitDiv.textContent == 'mb') {
			unitDiv.textContent = 'in';
			valDiv.textContent = Pressure * 2

		} else {
			unitDiv.textContent = 'mb'
			valDiv.textContent = Pressure

		}
	}

	function VisibilityChange() {
		const unitDiv = document.getElementById('visUnit');
		const valDiv = document.getElementById('visVal');

		if (unitDiv.textContent == 'km') {
			unitDiv.textContent = 'mile';
			valDiv.textContent = Visibility * 2

		} else {
			unitDiv.textContent = 'km'
			valDiv.textContent = Visibility

		}
	}

	function GustChange() {
		const unitDiv = document.getElementById('gustUnit');
		const valDiv = document.getElementById('gustVal');

		if (unitDiv.textContent == 'mph') {
			unitDiv.textContent = 'kph';
			valDiv.textContent = Gust * 2

		} else {
			unitDiv.textContent = 'mph'
			valDiv.textContent = Gust

		}
	}



	return (
		<>
			<div className="dash-background">
				<div className="dash-section">
					<div className="dash-left-section">
						<div className='Time-Section'>
							<div className='Time'>
								<FontAwesomeIcon icon={faClock} size='xl' style={{ color: 'White' }} />

								{` ${currentHour}:${currentMinute}:${currentSecond}`}
							</div>
							<div className='Location'>Edmonton, Alberta, Canada</div><br></br>

							<div className='Latitude'>{`Latitiude: ${Latitude}`}</div>
							<div className='Longitude'>{`Longitude: ${Longitude}`}</div>
							<div className='Temperature'>
								{`${Temp}°C`}
							</div>


						</div>
						<div className='Other-Weather-Section'>
							<div className='Pressure'>
								<div>Pressure </div>
								<div className='unit' id='pUnit' onClick={PressureChange}> in  </div>
								<div id='pressVal'>{Pressure} </div>

							</div>
							<div className='Visibility'>
								<div>Visibility .</div>
								<div className='unit' id='visUnit' onClick={VisibilityChange}> km  </div>
								<div id='visVal'>{Visibility}  </div>
							</div>

							<div className='Gust'>
								<div>WindGust</div>
								<div className='unit' id='gustUnit' onClick={GustChange}> km  </div>
								<div id='gustVal'>{Gust}  </div>
							</div>

						</div>

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
								<div className='Wind'><WindGraph /></div>
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
