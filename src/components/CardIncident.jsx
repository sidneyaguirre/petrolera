import React, { Component } from "react";

import "../styles/cardincident.css";

class CardIncident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: this.props.data
    };
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
                   <strong>Fecha:</strong> {incident.start_date} - {incident.end_date}
                  </div>
                  <div className="is-font-small">
                   <strong>Categoría:</strong> {incident.category}
                  </div>
                  <div className="is-font-small"><strong>Impacto:</strong> {incident.impact}</div>
                  <div><strong>Descripción:</strong></div>
                  <div className="card-body card-description">
                    <div className="is-font-small">{incident.description}</div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="is-font-small"><strong>Creado por:</strong> {incident.createdBy}</div>
                  <div className="is-font-small"><strong>Asignado a:</strong> {incident.assigned}</div>
                  <div className="is-font-small"><strong>Investigador:</strong> {incident.investigator}</div>
                </div>
                <div>
                <a href="/edit-incident" class="btn btn-primary stretched-link">Editar</a>
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
