import React, { Component } from "react";

import Navbar from "../components/Navbar";
import FormReportIncident from "../components/FormReportIncident";
import { jwtdecode } from './../_helpers/jwt'

class ReportIncident extends Component {
  state = {
    form: {
      title: "",
      description: "",
      category: "",
      impact: "",
      start_date: "",
      end_date: "",
      state: "",
      investigator: "",
      assigned: "",
      createdBy: ""
    }
  };

  clearForm = () => {
    this.setState({
      title: "",
      description: "",
      category: "",
      impact: "",
      start_date: "",
      end_date: "",
      state: "",
      investigator: "",
      assigned: "",
      createdBy: ""
    });
  };


  componentDidMount = () => {
    var decode = jwtdecode (localStorage.currentUser)
    var user = decode.user.name
    this.setState({
      form: {
        ...this.state.form,
        createdBy: user
      }
    });
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Form submitted");
    this.reportIncident(this.state.form).then(() => {
      this.clearForm();
    });
  };

  reportIncident = async info => {
    var url = "https://ing-web-project.herokuapp.com/incident";
    var decode = jwtdecode (localStorage.currentUser)
    var token = decode.user.jwtoken
    var data = {
      title: info.title,
      description: info.description,
      category: info.category,
      impact: info.impact,
      start_date: info.start_date,
      end_date: "",
      state: info.state,
      investigator: "",
      assigned: "",
      createdBy: info.createdBy
    };
    fetch(url, {
      method: "POST",
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
              <FormReportIncident
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
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
