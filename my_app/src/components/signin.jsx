import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class Signin extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <PageHeader titleText="🔑 Sign-In For Real App"/>

        <div className="row">
          <div className="col-12">
            <p>Login to your account now!!...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;