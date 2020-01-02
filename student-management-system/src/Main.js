import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import axios from "axios";
import Login from "./components/auth/Login";
import Sidebar from "./components/Home/Sidebar.js";
import Header from "./components/Home/Header.js";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    this.Logged();
  }

  Logged(e) {
    if (sessionStorage.getItem("userData")) {
      this.setState({ isLoggedIn: true });
    }
  }
  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <>
            {" "}
            <Sidebar /> <Header />{" "}
          </>
        ) : (
          ""
        )}
        <Routes />
      </>
    );
  }
}
