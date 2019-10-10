import React, { Component } from "react";

import Navbar from "../components/Navbar";
import CardIncident from "../components/CardIncident";
import { jwtdecode } from "./../_helpers/jwt";

class ListIncidents extends Component {
  state = {
    incidents: []
  };

  getIncidentsForAdmin() {
    var url = `https://ing-web-project.herokuapp.com/incidents`;
    var incidents = [];
    fetch(url)
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      // .catch(response => {
      //   /* this THEN (changed to "catch" to skip it) is intended when the DB has no incidents registered yet */
      //   console.log("Success:", response);
      //   window.alert("Resultado: " + JSON.stringify(response.response.msg));
      // })
      .then(info => {
        if (info !== undefined) {
          Promise.all(
            info.response.incidents.map(element => {
              if (element !== null) {
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
            })
          ).then(() => {
            this.setState({
              incidents: [].concat(this.state.incidents, incidents)
            });
          });
        }
      });
  }

  /* get incidents for investigators and supervisors*/
  getIncidentsSI() {
    var url = `https://ing-web-project.herokuapp.com/incidentsbydelegate`;
    var incidents = [];
    var decode = jwtdecode(localStorage.currentUser);
    var type = "";
    var user = decode.user.name;
    var role = decode.user.role;
    if (role === "supervisor") {
      type = "assigned";
    } else if (role === "investigator") {
      type = "investigator";
    }
    var data = {
      name: user,
      type: type
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(info => {
      if (info !== undefined) {
        Promise.all(
          info.response.incidents.map(element => {
            if (element !== null) {
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
          })
        ).then(() => {
          this.setState({
            incidents: [].concat(this.state.incidents, incidents)
          });
        });
      }
    });
  }

  isAdmin() {
    var current = jwtdecode(localStorage.currentUser);
    if (current.user.role === "admin") {
      return true;
    }
    return false;
  }

  isAllowed() {
    var current = jwtdecode(localStorage.currentUser);
    if (
      current.user.role === "supervisor" ||
      current.user.role === "investigator"
    ) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    if (this.isAdmin()) {
      console.log("is Admin");
      this.getIncidentsForAdmin();
    } else if (this.isAllowed) {
      console.log("is supervisor or investigator");
      this.getIncidentsSI();
    } else {
      console.log("This is someone else");
      return (
        <div>
          <h2>Función No permitida</h2>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="page">
        <Navbar className="navbar" />
        <div className="content">
          <div className="list">
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
