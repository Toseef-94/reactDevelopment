import React from "react";
import { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { PostData } from "../../services/PostData";
import { Redirect } from "react-router-dom";
import Background from "../../public/images/login.jpg";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      emailOrPasswordError: ""
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login(e) {
    let emailOrPasswordError = "";
    if (this.state.email && this.state.password) {
      PostData("login", this.state).then(result => {
        let responseJson = result;
        if (!this.state.email.includes("@")) {
          emailOrPasswordError = "Invalid Email";
        } else if (result.data.error) {
          emailOrPasswordError = "Wrong email or password.";
        }
        if (emailOrPasswordError) {
          this.setState({ emailOrPasswordError });
        }
        if (result.data.user) {
          sessionStorage.setItem("userData", result);
          this.setState({ redirect: true });
        } else {
          let errorMsg = result.data.msg;
        }
      });
      e.preventDefault();
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/home/dashboard"} />;
    }
    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/home/dashboard"} />;
    }

    const useStyles = makeStyles(theme => ({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: 200
        }
      }
    }));
    return (
      <div>
        <div id="login" style={{ backgroundImage: `url(${Background})` }}>
          <h3 className="text-center text-white pt-5">
            Student Management System
          </h3>
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form id="login-form" className="form" action method="post">
                    <h3 className="text-center text-info">Login</h3>
                    <div className="form-group">
                      <TextField
                        type="email"
                        name="email"
                        label="Email"
                        autoComplete="off"
                        required
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group passwordField">
                      <TextField
                        type="password"
                        name="password"
                        label="password"
                        autoComplete="off"
                        required
                        onChange={this.onChange}
                      />
                      <div class="login-error">
                        {this.state.emailOrPasswordError}
                      </div>
                    </div>
                    <div className="form-group">
                      <br />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={this.login}
                      >
                        Login
                      </Button>
                    </div>
                  </form>
                  <div id="register-link" className="text-center">
                    <span className="newMember"> Create an account</span>
                    <a href="/signup" className="text-info">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
