import React, { Component } from "react";
import ReactDOM from "react-dom";

import Navbar from "../components/Navbar";
import FormRegisterUser from "../components/FormRegisterUser";
import { jwtdecode } from './../_helpers/jwt'


class RegisterUser extends Component {
  state = {
    form: {
      userName: "",
      email: "",
      role: "",
      id_provider: "",
      documentType: "",
      documentNumber: "",
      password1: "",
      password2: ""
    }
  };

  componentDidMount(){

  }

  clearForm = () => {
    this.setState({
      userName: "",
      email: "",
      role: "",
      id_provider: "",
      documentType: "",
      documentNumber: "",
      password1: "",
      password2: ""
    });
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

  handlePasswords = (password1, password2) => {
    if (password1 !== password2) {
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Form submitted");
    this.createUser(this.state.form).then(() => {
      this.clearForm();
    });
  };

  unequalPasswordsAlert = () => {
    ReactDOM.render(
      <h4>Las contraseñas no coinciden</h4>,
      document.getElementById("passwordAlert")
    );
  };

  createUser = async info => {
    var url = "https://ing-web-project.herokuapp.com/user";
    var equalPasswords = this.handlePasswords(info.password1, info.password2);
    var decode = jwtdecode (localStorage.currentUser)
    var token = decode.user.jwtoken
    
    var data = {
      userName: info.userName,
      email: info.email,
      role: info.role,
      id_provider: info.id_provider,
      password: ""
    };
    if (equalPasswords) {
      data.password = info.password2;
    } else {
      this.unequalPasswordsAlert();
    }
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
        window.alert('Resultado: '+ JSON.stringify(response.response.msg));
      });
  };

  render() {
    return (
      <div className="page">
        <Navbar className="navbar" />
        <div className="content">
          <div className="row p-4 pt-5 h-100">
            <div className="col">
              <FormRegisterUser
                id="register-user"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state}
              />
              <div id="passwordAlert"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterUser;
