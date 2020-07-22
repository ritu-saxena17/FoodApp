import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Home from "./screens/HomePage/index";
import Login from "./screens/Login";
import Items from "./screens/IndividualItems/index";
import ItemsDetails from "./screens/ItemDetails/index";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/:uid/" component={ItemsDetails} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
