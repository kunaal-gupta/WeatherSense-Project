import React from 'react';

function About() {
	return <div>
		<center><h1  style={{fontSize: '3.5vw'}}>Weather Sense</h1></center>

		<a style={{fontSize: '2vw'}}><center> 			
			This is a full-stack project developed using MERN Stack (MongoDB, ExpressJS, React & Nodejs) <br></br>
			that fetches Weather API to display weather parameters like Humidity, UV index etc at frontend. 
			
			<br></br><br></br>MongoDB database at the backend stores user details like Name, Email, Password & 
			<br></br>City to display user specific details <br></br>

			<br></br>ExpressJS & NodeJs at the backend connects React framework with database and makes <br></br>  API requests for fetching data
		</center>

		</a>
	</div>
}
export default About;
