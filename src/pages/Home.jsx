import React, { Component } from "react";

import Navbar from "../components/Navbar";
import FirstQuestion from "../components/FirstQuestion";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <FirstQuestion />
      </React.Fragment>
    );
  }
}
