import React, { Component, Fragment } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/Home";
import SignUpView from "./views/SignUp";
import LogInView from "./views/LogIn";
import ProfileView from "./views/Profile";
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";

import Container from "react-bootstrap/Container";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Container className="my-5">
            <Switch>
              <Route path="/" exact component={HomeView} />
              <Route path="/login" component={LogInView} />
              <Route path="/signup" component={SignUpView} />
              <Route path="/profile" component={ProfileView} />
              <Route path="/error/:code" component={ErrorView} />
              <Route path="/" component={CatchAllView} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}
