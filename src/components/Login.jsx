import React, { Component } from "react";
import { authenticationService } from "../_services/authentication.service.js";

import logo from "../assets/logo.png";
import "../styles/styles.css";

var jwt = require("jsonwebtoken");


class Login extends Component {
  state = {
    form: {
      user: "",
      password: ""
    }
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
    authenticationService.login(this.state.form.user, this.state.form.password)
    console.log("form submitted");
  };

  render() {
    return (
      <div>
        <div className="login mx-auto d-block">
          <img src={logo} className="logo rounded mx-auto d-bloc" alt="logo" />
          <h4>Petrolera Corp.</h4>
        </div>
        <div className="login">
          <h1>Iniciar Sesión</h1>
        </div>
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">

              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    name="user"
                    type="text"
                    className="form-control form-control-lg form-rounded"
                    placeholder="Usuario"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    className="form-control form-control-lg form-rounded"
                    placeholder="Contraseña"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-block btn-primary"
                >
                  Entrar
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
