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
						<div className='daily-temp'>
							<div className='temp-boxes'>Sun</div>
							<div className='temp-boxes'>Mon</div>
							<div className='temp-boxes'>Tues</div>
							<div className='temp-boxes'>Wed</div>
							<div className='temp-boxes'>Thurs</div>
							<div className='temp-boxes'>Fri</div>
							<div className='temp-boxes'>Sat</div>

						</div>
					</div>
				</div>
			</div>



		</>
	)
}

export default Dashboard;
