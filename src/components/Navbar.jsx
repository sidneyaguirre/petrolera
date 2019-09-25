import React, { Component } from "react";
import { Link } from "react-router-dom"

import "../styles/navbar.css"

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <Link className="active" to="/home">Inicio</Link>
          <Link to="/report-incident">Reportar Incidente</Link>
          <Link to="/register-user">Registrar Usuario</Link>
          <Link to="/">Salir</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
