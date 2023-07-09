import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Dashboard from "./Dashboard.jsx";
import LoadWelcome from './Welcome.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/login">Home</Link>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

      </nav>

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={LoadWelcome} />

        <Route exact path="/login" component={Home} />
        <Route path="/register" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

    </BrowserRouter>
  );
}
