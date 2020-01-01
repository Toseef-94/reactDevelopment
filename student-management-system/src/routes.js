import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./private-route";
import Dashboard from "././components/Home/Dashboard";
import Login from "././components/auth/Login";
import Signup from "././components/auth/Signup";

const RedirectToLandingPage = () => {
  return <Redirect to="/" />;
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home/dashboard" component={Dashboard} />
      <Route component={RedirectToLandingPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
