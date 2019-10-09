import React, { Component } from "react";

import Navbar from "../components/Navbar";
import FormEditIncident from "../components/FormEditIncident";
import { jwtdecode } from "./../_helpers/jwt";

class ReportIncident extends Component {
  state = {
    incident: {},
    investigators: [],
    supervisors: []
  };

  // clearForm = () => {
  //   this.setState({
  //     title: "",
  //     description: "",
  //     category: "",
  //     impact: "",
  //     start_date: "",
  //     end_date: "",
  //     state: "",
  //     investigator: "",
  //     assigned: "",
  //     createdBy: ""
  //   });
  // };

  componentDidMount = () => {
    const { incident } = this.props.location.incidentInfo;
    this.setState({ incident: incident });
    this.getSupervisors();
    this.getInvestigators();
  };

  handleChange = e => {
    this.setState({
      incident: {
        ...this.state.incident,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(this.state.form);
    this.editIncident(this.state.incident);
    // .then(() => {
    //   this.clearForm();
    // });
  };

  editIncident = async info => {
    var url = "https://ing-web-project.herokuapp.com/incident";
    var decode = jwtdecode(localStorage.currentUser);
    var token = decode.user.token;
    var data = {
      id: info.id,
      end_date: info.end_date,
      state: info.state,
      investigator: info.investigator,
      assigned: info.assigned
    };
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        token: token
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        console.log("Success:", response);
        window.alert("Resultado: " + JSON.stringify(response.response.msg));
      });
  };

  getInvestigators() {
    var url = "https://ing-web-project.herokuapp.com/investigators";
    // var decode = jwtdecode (localStorage.currentUser);
    // var token = decode.user.token;
    var investigators = [];
    fetch(url)
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(info => {
        Promise.all(
          info.response.invesigators.map(element =>
            investigators.push({
              email: element.email,
              name: element.name
            })
          )
        ).then(() => {
          this.setState({
            investigators: [].concat(this.state.investigators, investigators)
          });
          // console.log(this.state);
        });
      });
  }

  getSupervisors() {
    var url = "https://ing-web-project.herokuapp.com/supervisors";
    // var decode = jwtdecode (localStorage.currentUser);
    // var token = decode.user.token;
    var supervisors = [];
    fetch(url)
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(info => {
        Promise.all(
          info.response.supervisors.map(element =>
            supervisors.push({
              email: element.email,
              name: element.name
            })
          )
        ).then(() => {
          this.setState({
            supervisors: [].concat(this.state.supervisors, supervisors)
          });
          // console.log(this.state);
        });
      });
  }

  render() {
    return (
      <div className="page">
        <Navbar className="navbar" />
        <div className="content">
          <div className="row p-4 pt-5 h-100">
            <div className="col-sm">
              <FormEditIncident
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state}
                className="col"
              />
              <div id="modal-message"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportIncident;
