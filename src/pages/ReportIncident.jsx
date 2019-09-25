import React, { Component } from "react";

import FormReportIncident from "../components/FormReportIncident";

class ReportIncident extends Component {
  state = {
    form: {
      title: "",
      description: "",
      category: "",
      impact: "",
      start_date: "",
      end_date: "",
      state: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        /* we get the previous values in the form*/
        ...this.state.form,
        /* and add a new one */
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Form submitted");
  };

  render() {
    return (
      <div className="container">
        <div className="row p-4 pt-5 h-100">
          <div className="col-sm">
            <FormReportIncident
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              className="col"
            />
            <div id="passwordAlert"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportIncident;
