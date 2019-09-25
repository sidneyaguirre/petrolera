import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import { history } from "./_helpers/history";
import { authenticationService } from "./_services/authentication.service";
import { PrivateRoute } from "./components/PrivateRoute";
//import { from } from "rxjs";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import ReportIncident from "./pages/ReportIncident";
import RegisterUser from "./pages/RegisterUser";

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
      <div>
        <div className="App">
          <Router history={history}>
            <div>
              <Route exact path="/" component={Login} />
              <PrivateRoute exact path="/home" component={HomePage} />
              <PrivateRoute exact path="/report-incident" component={ReportIncident} />
              <PrivateRoute exact path="/register-user" component={RegisterUser} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
