import React, { Component } from "react";
import { MdPlayCircleFilled, MdToday, MdHealing } from "react-icons/md";
import { TiPuzzle } from "react-icons/ti";

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
            <li key={incident.title}>
              <div className="card rounded-lg  is-box">
                <div className="card-body">
                  <h5 className="card-title text-primary">{incident.title}</h5>
                  <div className="is-font-small">
                    <MdPlayCircleFilled /> {incident.state}
                  </div>
                  <div className="is-font-small">
                    <MdToday /> {incident.start_date} - {incident.end_date}
                  </div>
                  <div className="is-font-small">
                    <TiPuzzle /> {incident.category}
                  </div>
                  <div className="is-font-small"><MdHealing /> {incident.impact}</div>
                  <div class="card-body">
                    <div className="is-font-small">{incident.description}</div>
                  </div>
                </div>
                <div class="card-footer">
                  <div className="is-font-small">{incident.createdBy}</div>
                  <div className="is-font-small">{incident.assigned}</div>
                  <div className="is-font-small">{incident.investigator}</div>
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
