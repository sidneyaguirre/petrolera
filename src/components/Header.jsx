import React, { Component } from "react";

import logo from "../assets/logo.png";
import '../styles/styles.css'

class Header extends Component {
  render() {
    return (
          <div>
              <nav className="navbar navbar-light bg-light">
                  <a href="/" className="navbar-brand">
                      <img src={logo} width="100" height="100" className="d-inline-block align-top" alt="logo petrolera" />
                      Petrolera
                  </a>
              </nav>
          </div>
    );
  }
}

export default Header;
