import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../css/App.css'

import LoadLoginPage from "./Login.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Dashboard from "./Dashboard.jsx";
import LoadWelcome from './Welcome.jsx'
import LoadRegisterPage from './Register.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="NavBar">
        <Link className = 'home' to="/">Home</Link>

        <Link className = 'home' to="/dashboard">Dashboard</Link>
        <Link className = 'home' to="/about">About</Link>
        <Link className = 'home' to="/contact">Contact</Link>

      </nav>

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={LoadWelcome} />

        <Route exact path="/login" component={LoadLoginPage} />
        <Route path="/register" component={LoadRegisterPage} />

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

    </BrowserRouter>
  );
}
