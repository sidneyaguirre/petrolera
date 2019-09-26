import React, { Component } from "react";

import person from "../assets/person.png";
import "../styles/profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-card">
        <div className="card mb-3">
          <div className="cardheader"></div>
          <div className="card-img-top">
            <img alt="" src={person} className="person-img"></img>
          </div>
          <div className="card-body">
            <div className="card-title">
              <h2>{this.props.user.userName}</h2>
            </div>
            <div className="card-text">{this.props.user.role}</div>
            <div className="card-text">{this.props.user.email}</div>
            <div>
            <i class="fab fa-google-plus-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i className="fab fa-facebook"></i>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
