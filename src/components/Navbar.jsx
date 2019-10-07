import React, { Component } from "react";
import { Link } from "react-router-dom";

import { history } from "../_helpers/history";
import { authenticationService } from "../_services/authentication.service";

import logo from "../assets/PetroleraCorpleaf.png";
import "../styles/navbar.css";

class Navbar extends Component {
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
    this.getPathname();
  }

  logout() {
    authenticationService.logout();
    history.push("/");
  }

  isAdmin() {
    var userAdmin = JSON.parse(localStorage.currentUser).role;
    if (userAdmin === "admin") {
      return false;
    }
    return true;
  }

  getPathname() {
    var path = window.location.pathname;
    var color = "#198bd8";
    switch (path) {
      case "/home":
        document.getElementById("home").style.background = color;
        break;
      case "/report-incident":
        document.getElementById("report-incident").style.background = color;
        break;
      case "/incidents":
        document.getElementById("incidents").style.background = color;
        break;
      case "/register-user":
        document.getElementById("register-user").style.background = color;
        break;
      default:
        console.log();
        break;
    }
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <div>
            <img src={logo} className="thumbnail-logo rounded" alt="logo" />
          </div>
          <Link id="home" to="/home">
            Inicio
          </Link>
          <Link id="incidents" to="/incidents">
            Listar Incidentes
          </Link>
          <Link id="report-incident" to="/report-incident">
            Reportar Incidente
          </Link>
          <Link hidden={this.isAdmin()} id="register-user" to="/register-user">
            Registrar Usuario
          </Link>
          <button type="button" className="link-button" onClick={this.logout}>
            Salir
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
