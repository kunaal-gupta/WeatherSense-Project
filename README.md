<div align="center">

# Weather Sense

</div>

This repository contains a full-stack project developed using the MERN stack (MongoDB, Express.js, React, and Node.js) that fetches weather data from an API and displays it on the frontend.

## Frontend
The frontend is built with React and is responsible for rendering and routing various sub-components, including the dashboard page, welcome page, and login/register pages. These pages are designed using a combination of HTML, CSS, and JavaScript. The Axios library is utilized to make GET/POST requests to fetch data from the Weather API and communicate with the MongoDB database.

## Backend
The backend consists of Express.js and Node.js, which act as a bridge between the React frontend and the database. It facilitates the retrieval of weather data by making API requests through Express's GET/POST functionality. 

The MongoDB database, hosted on MongoDB Atlas, is utilized to store two collections: one for active users (those currently logged in) and another for registered users. The registered users collection contains details such as name, email, password, and city.

## Authors

- [@Kunaal Gupta](https://github.com/kunaal-gupta)


## Installation and Setup

```bash
git clone https://github.com/kunaal-gupta/WeatherSense.git
```
```bash
npm install
```

# Running App

**Server-side Application**

```bash
  cd server
```

```bash
  npm install
```

```bash
  npm run dev
```

**Client-side Application**

```bash
  cd server
```

```bash
  npm install
```

```bash
  npm start
```


## Tech Stack

**Frontend:** React

**Backend:** Node, Express 

**Database:** MongoDB


## Feedback

If you have any feedback, please reach out to us at kunaalgupta@hotmail.com


## Installation

Install WeatherSense with npm after cloning the project

```bash
npm Install

```
    
## Documentation

[React Framework](https://react.dev/)

[Express JS](https://expressjs.com/)

[MongoDB](https://www.mongodb.com/)

[Axios](https://axios-http.com/)


## Features

- Fetches weather data from an API every minute and displays it in the frontend
- Allows users to register and login to access personalized weather information
- Stores user data, including name, email, password, and city, in a MongoDB database
- Provides a responsive user interface with routing and sub-component rendering using React


## Contributing

Contributions are always welcome!

If you encounter any bugs or would like to suggest improvements, please open an issue or submit a pull request.


