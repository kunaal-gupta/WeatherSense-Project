import React from 'react';
import "../css/dashboard.css";


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
								<div className='temp-boxes'>Sun</div>
								<div className='temp-boxes'>Mon</div>
								<div className='temp-boxes'>Tues</div>
								<div className='temp-boxes'>Wed</div>
								<div className='temp-boxes'>Thurs</div>
								<div className='temp-boxes'>Fri</div>
								<div className='temp-boxes'>Sat</div>

							</div>

							<div className='other-weather-details'>
							<div className='humidity'>Humidity</div>
							<div className='humidity'>Wind</div>
							<div className='humidity'>Feels Like</div>
							<div className='humidity'>Precipitation</div>
							<div className='humidity'>UV Index</div>
							<div className='humidity'>AQI</div>

						</div>
						</div>
					</div>

				</div>
			</div>



		</>
	)
}

export default Dashboard;
