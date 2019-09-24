import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";

import { history } from "./_helpers/history";
import { authenticationService } from "./_services/authentication.service";
import { PrivateRoute } from "./components/PrivateRoute";
import { from } from "rxjs";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage"

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/");
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/home" component={HomePage} />
            <Route exact path="/" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
