import React, { Component } from "react";

import Navbar from "../components/Navbar";
import FormEditIncident from "../components/FormEditIncident";

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
    // console.log("incident", incident);
    this.setState({ incident: incident }/* , () => console.log("page-edit state", this.state.incident) */);
  };

  handleChange = e => {
    this.setState({
      incident: {
        ...this.state.incident,
        [e.target.name]: e.target.value
      }
    });
    // console.log("this is changing");
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Form submitted");
    this.editIncident(this.state.form);
    // .then(() => {
    //   this.clearForm();
    // });
  };

  editIncident = async info => {
    var url = "https://ing-web-project.herokuapp.com/incident";
    var token = JSON.parse(localStorage.currentUser).jwtoken;
    // console.log("my token", token);
    var data = {
      id: info.id,
      end_date: info.end_date,
      state: info.state,
      investigator: info.investigator,
      assigned: info.assigned
    };
    console.log(data);
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
        // this.showMessage(response.response.msg);
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
                // editionValues={this.state.form}
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
