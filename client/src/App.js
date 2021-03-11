import React, { Component } from "react";
import Search from "./pages/Search/Search";
import Save from "./pages/Save/Save";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Save />
    </div>
  );
}

export default App;
