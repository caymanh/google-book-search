import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Save from "./pages/Save/Save";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Search} />
        <Route exact path="/save" component={Save} />
      </div>
    </Router>
  );
}

export default App;
