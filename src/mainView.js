import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Cart } from "./cartPage";
import {PageNotFound} from "./pageNotFound"
import {Orders} from './orderPage'

export function MainView() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
      <Route path="/myorders">
        <Orders/>
      </Route>
      <Route>
        <PageNotFound/>
      </Route>
    </Switch>
  );
}