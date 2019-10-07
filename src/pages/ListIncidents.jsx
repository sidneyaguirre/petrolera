import React, { Component } from "react";

import Navbar from "../components/Navbar";
import CardIncident from "../components/CardIncident";
import "../styles/profile.css";

class ListIncidents extends Component {
  state = {
    incidents: []
  };

  componentDidMount() {
    var url = `https://ing-web-project.herokuapp.com/incidents`;
    var incidents = [];
    fetch(url)
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(info => {
        Promise.all(
          info.response.incidents.map(element => {
            if(element !== null){
              incidents.push({
                id: element.id,
                title: element.title,
                category: element.category,
                description: element.description,
                impact: element.impact,
                createdBy: element.createdBy,
                assigned: element.assigned,
                investigator: element.investigator,
                start_date: element.start_date,
                end_date: element.end_date,
                state: element.state
              });
            }
            // console.log(element);
          })
        ).then(() => {
          this.setState({
            incidents: [].concat(this.state.incidents, incidents)
          });
          // console.log("incidentes estado: ", this.state);
        });
      });
  }

  render() {
    return (
      <div className="page">
        <Navbar className="navbar" />
        <div className="content">
          <div className="row p-4 pt-5 h-100">
            <div className="col">
              <CardIncident className="card" data={this.state.incidents} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListIncidents;
