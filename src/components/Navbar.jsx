import React, { Component } from "react";
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"

import { history } from "../_helpers/history";
import { authenticationService } from "../_services/authentication.service";
import "../styles/navbar.css"

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: null
    };
}

componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
}

logout() {
    authenticationService.logout();
    history.push('/');
}

isAdmin(){
  var userAdmin = JSON.parse(localStorage.currentUser).role;
  console.log(userAdmin);
  if(userAdmin === "admin"){
    return false;
  }
  return true;
}

  render() {
    return (
      <div>
        <div className="sidebar">
          <Link className="active" to="/home">Inicio</Link>
          <Link to="/report-incident">Reportar Incidente</Link>
          <Link hidden={this.isAdmin()}  to="/register-user">Registrar Usuario</Link>
          <a onClick={this.logout}>Salir</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
