import React, { Component } from "react";
import { Link } from "react-router-dom";
import { jwtdecode } from "./../_helpers/jwt";

import "../styles/cardincident.css";

class CardIncident extends Component {
  handleClick = e => {
    console.log("I will edit this incident");
  }

  handleEdition = () => {
    var current = jwtdecode(localStorage.currentUser);
    if (
      current.user.role === "admin" ||
      current.user.role === "supervisor"
    ) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <ul className="incident-list">
        {this.props.data.map(incident => {
          return (
            <li key={incident.id} className="incident-element-list">
              <div className="card rounded-lg is-box">
                <div className="card-body">
                  <h5 className="card-title text-primary">{incident.title}</h5>
                  <div className="is-font-small">
                    <strong>Estado:</strong> {incident.state}
                  </div>
                  <div className="is-font-small">
                    <strong>Fecha:</strong> {incident.start_date} -{" "}
                    {incident.end_date}
                  </div>
                  <div className="is-font-small">
                    <strong>Categoría:</strong> {incident.category}
                  </div>
                  <div className="is-font-small">
                    <strong>Impacto:</strong> {incident.impact}
                  </div>
                  <div>
                    <strong>Descripción:</strong>
                  </div>
                  <div className="card-body card-description">
                    <div className="is-font-small">{incident.description}</div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="is-font-small">
                    <strong>Creado por:</strong> {incident.createdBy}
                  </div>
                  <div className="is-font-small">
                    <strong>Responsable:</strong> {incident.assigned}
                  </div>
                  <div className="is-font-small">
                    <strong>Investigador:</strong> {incident.investigator}
                  </div>
                </div>
                <div>
                  <Link
                  onClick={this.handleClick}
                    to={{
                      pathname: "/edit-incident",
                      incidentInfo: { incident }
                    }}
                    className="btn btn-primary stretched-link"
                    hidden={this.handleEdition()}
                  >
                    Editar
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CardIncident;
