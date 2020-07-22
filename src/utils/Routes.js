import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./screens/HomePage/index";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Items from "./screens/IndividualPage/index";

const createRoutes = () => (
  <Router>
    <Route exact path="/home" component={Home} />
    <Route exact path="/items" component={Items} />
    <Route exact path="/home" component={Home} />
  </Router>
);

export default createRoutes;
