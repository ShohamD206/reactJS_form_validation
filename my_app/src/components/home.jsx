import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <PageHeader titleText="💫 Real App Home Page 💫"/>

        <div className="row">
          <div className="col-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              soluta aliquid eligendi? Iste atque hic, commodi est qui quibusdam
              nesciunt fuga velit? Quasi optio, laborum ab error inventore cum
              id!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;