import React, { useEffect, useState } from 'react';
import "../css/dashboard.css";
import WindGraph from './Radialbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';



function Dashboard() {
	const [Temp, setTemp] = useState(20);
	const [TempUnit, setTempUnit] = useState('C');

	const [FeelsLike, setFeelsLike] = useState(20);
	const [FeelsLikeUnit, setFeelsLikeUnit] = useState('C');


	let Lheight = 70;
	let Rheight = 40;

	const [Longitude, setLongitude] = useState(-113.5);
	const [Latitude, setLatitude] = useState(53.55);

	const [Pressure, setPressure] = useState(5);
	const [PressureUnit, setPressureUnit] = useState('mb');

	const [Visibility, setVisibility] = useState(4);
	const [VisibilityUnit, setVisibilityUnit] = useState('km');

	const [Gust, setGust] = useState(6);
	const [GustUnit, setGustUnit] = useState('mph');

	// const [Wind, setWind] = useState(0);

	// let Temp = 20;
	let Wind = 0;
	let wind_degree = 270;
	let wind_dir = 'N';

	const currentTime = new Date();
	const currentHour = currentTime.getHours();
	const currentMinute = currentTime.getMinutes();
	const currentSecond = currentTime.getSeconds();


	function PressureChange() {
		if (PressureUnit === 'mb') {
			setPressureUnit('in');
			setPressure((Pressure * 0.03937).toFixed(1));
		} else {
			setPressureUnit('mb');
			setPressure((Pressure / 0.03937).toFixed(1));
		}
	}

	function VisibilityChange() {
		if (VisibilityUnit === 'km') {
			setVisibilityUnit('mile');
			setVisibility((Visibility * 0.62137119).toFixed(1));
		} else {
			setVisibilityUnit('km');
			setVisibility((Visibility / 0.62137119).toFixed(1));
		}
	}

	function GustChange() {
		if (GustUnit === 'mph') {
			setGustUnit('kph');
			setGust((Gust * 1.609).toFixed(1));
		} else {
			setGustUnit('mph');
			setGust((Gust / 1.609).toFixed(1));
		}
	}

	function changeTempUnit() {
		if (TempUnit === 'C') {
			setTempUnit('F');
			setFeelsLikeUnit('F')
			setTemp((Temp * 9 / 5) + 32);
			setFeelsLike((FeelsLike * 9 / 5) + 32)
		} else {
			setTempUnit('C');
			setFeelsLikeUnit('F')
			setTemp((Temp - 32) * 5 / 9);
			setFeelsLike((FeelsLike - 32) * 5 / 9)
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
							<div className='Temperature' onClick={changeTempUnit}>
								<div className='tempVal'>{`${Temp}°`} </div>
								<div className='tempUnit'> {TempUnit}</div>
							</div>
							<div className='feels-like'>Feels like {FeelsLike}°C</div>


						</div>
						<div className='Other-Weather-Section'>
							<div className='Pressure'>
								<div>Pressure </div>
								<div className='unit' id='pUnit' onClick={PressureChange}> {PressureUnit}  </div>
								<div id='pressVal'>{Pressure} </div>

							</div>
							<div className='Visibility'>
								<div>Visibility .</div>
								<div className='unit' id='visUnit' onClick={VisibilityChange}> {VisibilityUnit}  </div>
								<div id='visVal'>{Visibility}  </div>
							</div>

							<div className='Gust'>
								<div>WindGust</div>
								<div className='unit' id='gustUnit' onClick={GustChange}> {GustUnit}  </div>
								<div id='gustVal'>{Gust}  </div>
							</div>

						</div>

					</div>
					<div className="dash-right-section">
						<div className='dash-right-content'>
							<div className='daily-right-top-section'>

								<div className='Wind'>Wind {Wind} mph {wind_degree}° {wind_dir}  </div>

							</div>
							<div className='dash-right-bottom-section'>

								<div className='thermom-section-left'>
									<div className='thermom' style={{ height: Lheight + '%' }}></div>
								</div>
								<div className='WindGraph'><WindGraph /></div>
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
