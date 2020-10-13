import React, { Component } from "react";

import "../styles/create_banner.css";

export default class CreateStudInput extends Component {
  // Trigger the button element with a click
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      document.getElementById("create-table-btn").click();
    }
  };

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
            onKeyUp={this.handleKeyUp}
          />
          <button
            onClick={this.props.createStudsMarksArr}
            id="create-table-btn"
          >
            Create Table
          </button>
        </div>
      </div>
    );
  }
}
