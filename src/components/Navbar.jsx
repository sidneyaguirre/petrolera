import React, { Component } from "react";
import { Link } from "react-router-dom";

import { history } from "../_helpers/history";
import { authenticationService } from "../_services/authentication.service";

import logo from "../assets/PetroleraCorpleaf.png";
import "../styles/navbar.css";
import { jwtdecode } from "./../_helpers/jwt";

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
    var current = jwtdecode(localStorage.currentUser);
    if (current.user.role === "admin") {
      return false;
    }
    return true;
  }

  isAllowedToLink() {
    var current = jwtdecode(localStorage.currentUser);
    if (
      current.user.role === "admin" ||
      current.user.role === "supervisor" ||
      current.user.role === "investigator"
    ) {
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
        console.log("Esta ruta no existe");
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
          <Link hidden={this.isAllowedToLink()} id="incidents" to="/incidents">
            Listar Incidentes
          </Link>
          <Link id="report-incident" to="/report-incident">
            Reportar Incidente
          </Link>
          <Link hidden={this.isAdmin()} id="register-user" to="/register-user">
            Registrar Usuario
          </Link>
          <button type="button" className="link-button" onClick={this.logout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
