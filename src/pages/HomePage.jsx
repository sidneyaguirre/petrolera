import React, { Component } from "react";

import { authenticationService } from "../_services/authentication.service";

import Navbar from "../components/Navbar";
import Profile from "../components/Profile"

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="page">
          <Navbar className="navbar" />
        <div className="content">
          <Profile user={this.state.currentUser} />
        </div>
      </div>
    );
  }
}

export default HomePage;
