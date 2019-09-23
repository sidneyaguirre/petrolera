import React, { Component } from "react";

import Header from "./Header";

const Logged = props => {
  return (
    <div>
      <Header />
      <h1>Hello {...props}</h1>
    </div>
  );
};

export default Logged;