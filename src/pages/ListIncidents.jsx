import React, { Component } from "react";

import Navbar from "../components/Navbar";
import CardIncident from "../components/CardIncident";
import "../styles/profile.css"

class ListIncidents extends Component {
  state = {
    incidents: []
  };

  componentDidMount() {
    var url = `https://ing-web-project.herokuapp.com/get-all-incidents`;
    var incidents = [];
    fetch(url)
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(info => {
        Promise.all(
          info.response.incidents.map(element =>
            incidents.push({
              title: element.data.title,
              category: element.data.category,
              description: element.data.description,
              impact: element.data.impact,
              createdBy: element.data.createdBy,
              assigned: element.data.assigned,
              investigator: element.data.investigator,
              start_date: element.data.start_date,
              end_date: element.data.end_date,
              state: element.data.state
            })
          )
        ).then(() => {
          this.setState({
            courses: [].concat(this.state.incidents, incidents)
          });
          console.log(this.state);
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
              <CardIncident data={this.state.incidents} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListIncidents;
