import React, { Component } from "react";

import person from "../assets/person.png";
import "../styles/profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-card">
          <div className="card-img-top">
            <img alt="" src={person} className="person-img"></img>
          </div>
          <div className="card-body">
            <div className="card-title">
              <h2>{this.props.user.name}</h2>
            </div>
            <div className="card-text"><strong>Usuario:</strong> {this.props.user.userName}</div>
            <div className="card-text"><strong>Correo:</strong> {this.props.user.email}</div>
            <div className="card-text"><strong>Rol:</strong> {this.props.user.role}</div>
            <div>
            <i className="fab fa-google-plus-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-facebook"></i>
          </div>
          </div>
        </div>
    );
  }
}

export default Profile;
