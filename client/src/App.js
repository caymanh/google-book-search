import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Search from "./pages/Search/Search";
import Save from "./pages/Save/Save";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Route exact path="/" component={Search} />
        <Route exact path="/save" component={Save} />
      </div>
    </Router>
  );
}

export default App;
