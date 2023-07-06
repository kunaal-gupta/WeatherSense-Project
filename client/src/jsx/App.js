import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}
