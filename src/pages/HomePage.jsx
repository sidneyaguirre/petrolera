import React, { Component } from "react";

import { authenticationService } from "../_services/authentication.service";

import Navbar from "../components/Navbar";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue
    };
  }

  componentDidMount() {}

  render() {
    const { currentUser } = this.state;
    return (
      <div className="page">
          <Navbar className="navbar" />
        <div className="content">
          <h1>Hi {currentUser.userName}!</h1>
          <p>You're logged in</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
