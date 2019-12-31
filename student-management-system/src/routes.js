import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "././components/Home/Dashboard";
import Login from "././components/auth/Login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Dashboard} />
      <Route path="/auth" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
