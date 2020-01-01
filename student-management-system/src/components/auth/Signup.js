import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { PostData } from "../../services/PostData";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false
    };
    this.signUp = this.signUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signUp(e) {
    if (this.state.name && this.state.email && this.state.password) {
      PostData("register", this.state).then(result => {
        let responseJson = result;
        console.log(result);
        if (result.data.user) {
          sessionStorage.setItem("userData", result);
          this.setState({ redirect: true });
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
    return (
      <div>
        <div id="signUp">
          <h3 className="text-center text-white pt-5">Signup form</h3>
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
                        Username:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="username"
                        required
                        autoComplete="off"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="text-info">
                        Email:
                      </label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        autoComplete="off"
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
                        autoComplete="off"
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

                      <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={this.signUp}
                      >
                        Submit
                      </button>
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

export default Signup;