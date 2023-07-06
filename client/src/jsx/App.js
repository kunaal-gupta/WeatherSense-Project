import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Dashboard from "./Dashboard.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

    </BrowserRouter>
  );
}
