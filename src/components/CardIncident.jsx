import React, { Component } from "react";
import { Link } from "react-router-dom";
import { jwtdecode } from "./../_helpers/jwt";

import "../styles/cardincident.css";

class CardIncident extends Component {
  handleClick = e => {
    console.log("I will edit this incident");
  };

  handleEdition = () => {
    var current = jwtdecode(localStorage.currentUser);
    if (current.user.role === "admin" || current.user.role === "supervisor") {
      return false;
    }
    return true;
  };

  render() {
    return (
      <ul className="incident-list">
        {this.props.data.map(incident => {
          return (
            <li key={incident.id} className="incident-element-list">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title text-primary text-capitalize pt-2">
                    {incident.title}
                  </h5>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col">
                      <div className="is-font-small ml-3">
                        <strong>Estado:</strong> {incident.state}
                      </div>
                    </div>
                    <div className="col">
                      <div className="is-font-small ml-3">
                        <strong>Categoría:</strong> {incident.category}
                      </div>
                    </div>
                    <div className="col">
                      <div className="is-font-small ml-3">
                        <strong>Impacto:</strong> {incident.impact}
                      </div>
                    </div>
                  </div>

                  <div className="row pt-3">
                    <div className="is-font-small ml-3 mr-3">
                      <strong>Fecha Suceso:</strong> {incident.start_date}
                    </div>
                  </div>

                  <div className="row pb-3">
                    <div className="is-font-small ml-3 mr-3">
                      <strong>Fecha Clausura:</strong> {incident.end_date}
                    </div>
                  </div>

                  <div className="is-font-small ml-3 mr-3 pt-2">
                    <strong>Descripción</strong>
                  </div>
                  <div className="card-description p-3 m-0">
                    <div className="is-font-small">{incident.description}</div>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="row ml-3 mr-3">
                    <div className="is-font-small ml-3">
                      <strong>Creado por:</strong> {incident.createdBy}
                    </div>
                    <div className="is-font-small ml-3 mr-3">
                      <strong>Responsable:</strong> {incident.assigned}
                    </div>
                    <div className="is-font-small ml-3 mr-3">
                      <strong>Investigador:</strong> {incident.investigator}
                    </div>
                  </div>
                </div>
                <div className="pb-3">
                  <Link
                    onClick={this.handleClick}
                    to={{
                      pathname: "/edit-incident",
                      incidentInfo: { incident }
                    }}
                    className="btn btn-primary m-0"
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
