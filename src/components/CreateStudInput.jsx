import React, { Component } from "react";

import "../styles/create_banner.css";

export default class CreateStudInput extends Component {
  render() {
    return (
      <div className="row m-0">
        <div className="col create_banner">
          <p className="heading">Create Students Marks Table</p>

          <input
            type="number"
            value={this.props.noOfStud}
            onChange={this.props.handleNoOfStud}
            placeholder="No of Students"
          />
          <button onClick={this.props.createStudsMarksArr}>Create Table</button>
        </div>
      </div>
    );
  }
}
