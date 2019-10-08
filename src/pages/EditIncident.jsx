import React, { Component } from "react";

import Navbar from "../components/Navbar";
import FormEditIncident from "../components/FormEditIncident";
import { jwtencode, jwtdecode } from './../_helpers/jwt'

class ReportIncident extends Component {
  state = {
    incident: {}
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
    this.setState({ incident: incident }/* , () => console.log("page-edit state", this.state.incident) */);
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
    var decode = jwtdecode (localStorage.currentUser)
    // var token = JSON.parse(localStorage.currentUser).jwtoken;
    var token = decode.user.token
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
                formValues={this.state.incident}
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
