import { Component } from "react";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import axios from "axios";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
