import React, { useEffect, useState } from 'react';
import "../css/dashboard.css";
import axios from 'axios';

import WindGraph from './Radialbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';



function Dashboard() {
	useEffect(() => {
		const data = 'Send Temperature Data';
		axios.get('http://localhost:5000/loadDashboard', data)
			.then((response) => {
				
				setCloud(response.data.Cloud)
				setTemp(response.data.Temp)
				setFeelsLike(response.data.FeelsLike)
				setGust(response.data.Gust)
				setLatitude(response.data.Latitude)
				setLongitude(response.data.Longitude)
				setPressure(response.data.Pressure)
				setVisibility(response.data.Visibility)
				setGust(response.data.Gust)
				setWind(response.data.Wind)
				setWindDeg(response.data.WindDeg)
				setWindDir(response.data.WindDir)
				setUVIndex(response.data.UV)
				setTime(response.data.Time)

			})
			.catch(error => {
				console.error('hi', error);
			});
	}, [])

	const [Temp, setTemp] = useState(20);
	const [TempUnit, setTempUnit] = useState('C');

	const [Cloud, setCloud] = useState(0);

	const [Time, setTime] = useState(20);

	const [FeelsLike, setFeelsLike] = useState(20);
	const [FeelsLikeUnit, setFeelsLikeUnit] = useState('C');

	const [Visibility, setVisibility] = useState(70)
	const [UVIndex, setUVIndex] = useState(40);

	const [Longitude, setLongitude] = useState(-113.5);
	const [Latitude, setLatitude] = useState(53.55);

	const [Pressure, setPressure] = useState(5);
	const [PressureUnit, setPressureUnit] = useState('mb');

	const [VisibilityUnit, setVisibilityUnit] = useState('km');

	const [Gust, setGust] = useState(6);
	const [GustUnit, setGustUnit] = useState('mph');

	const [WindUnit, setWindUnit] = useState('mph')
	const [Wind, setWind] = useState(0);
	const [WindDeg, setWindDeg] = useState(270);
	const [WindDir, setWindDir] = useState('N');

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


	function WindChange() {
		if (WindUnit === 'mph') {
			setWindUnit('kph');
			setWind((Wind * 1.609).toFixed(1));
		} else {
			setWindUnit('mph');
			setWind((Gust / 1.609).toFixed(1));
		}
	}


	function changeTempUnit() {
		if (TempUnit === 'C') {
			setTempUnit('F');
			setFeelsLikeUnit('F')
			setTemp(((Temp * 9 / 5) + 32).toFixed(1));
			setFeelsLike(((FeelsLike * 9 / 5) + 32).toFixed(1))
		} else {
			setTempUnit('C');
			setFeelsLikeUnit('F')
			setTemp(((Temp - 32) * 5 / 9).toFixed(1));
			setFeelsLike(((FeelsLike - 32) * 5 / 9).toFixed(1))
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
							<div className='feels-like'>{`Feels like ${FeelsLike}°${FeelsLikeUnit}`}</div>


						</div>
						<div className='Other-Weather-Section'>
							<div className='Pressure'>
								<div>Pressure </div>
								<div className='unit' id='pUnit' onClick={PressureChange}> {PressureUnit}  </div>
								<div id='pressVal'>{Pressure} </div>

							</div>
							<div className='Visibility'>
								<div>Visibility</div>
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

								<div className='Wind' onClick={WindChange}>Wind: {Wind} {WindUnit} @ {WindDeg}°{WindDir}  </div>
								<div className='VisibNuvIndex-name'>
									<div className='Cloud'>Chances of Cloud</div>
									<div className='UV'> UV Index <br />(1 - 11)</div>
								</div>

							</div>
							<div className='dash-right-bottom-section'>

								<div className='thermom-section-left'>
									<div className='thermom' style={{ height: `${Cloud}%` }}></div>
								</div>

								<div className='WindGraph'><WindGraph /></div>
								<div className='thermom-section-right'>
								<div className='thermom' style={{ height: `${UVIndex/0.11}%` }}></div>

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
