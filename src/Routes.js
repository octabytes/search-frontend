import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import Route from "core/Route";
import Home from "views/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" view={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
