import React from "react";
import { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { PostData } from "../../services/PostData";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login(e) {
          debugger;
    PostData("login", this.state).then(result => {

      let responseJson = result;
      if(result.data.user){
   
      }
    });
    e.preventDefault();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div id="login">
          <h3 className="text-center text-white pt-5">Login form</h3>
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
                      <label htmlFor="username" className="text-info">
                        Email:
                      </label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-info">
                        Password:
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="remember-me" className="text-info">
                        <span>Remember me</span>&nbsp;
                        <span>
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                          />
                        </span>
                      </label>
                      <br />

                      <button onClick={this.login}>Submit</button>
                    </div>
                    <div id="register-link" className="text-right">
                      <a href="#" className="text-info">
                        Register here
                      </a>
                    </div>
                  </form>
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
