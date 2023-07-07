import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Dashboard from "./Dashboard.jsx";
import WindGraph from "./Radialbar.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/login">Home</Link>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/radialgraph">RadialGraph</Link>

      </nav>

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Home} />
        <Route path="/register" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/radialgraph" component={WindGraph} />;

    </BrowserRouter>
  );
}
