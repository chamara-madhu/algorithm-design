import React, { Component } from "react";

import createStudsMarksArr from "../images/createStudsMarksArr.png";
import getRandomName from "../images/getRandomName.png";
import getRandomMark from "../images/getRandomMark.png";
import nameAsc from "../images/nameAsc.png";
import nameDesc from "../images/nameDesc.png";
import markAsc from "../images/markAsc.png";
import markDesc from "../images/markDesc.png";
import highestMarks from "../images/highestMarks.png";
import lowestMarks from "../images/lowestMarks.png";
import fifthHighestMark from "../images/fifthHighestMark.png";
import tenthLowestMark from "../images/tenthLowestMark.png";
import nameStartWithS from "../images/nameStartWithS.png";
import nameEndsWithL from "../images/nameEndsWithL.png";

import nameAZ from "../images/name-A-Z.png";

export default class Code extends Component {
  render() {
    return (
      <div className="col_code">
        <p className="heading">Code</p>
        {this.props.activeTable && (
          <React.Fragment>
            <img src={createStudsMarksArr} alt="createStudsMarksArr" />
            <img src={getRandomName} alt="getRandomName" />
            <img src={getRandomMark} alt="getRandomMark" />
          </React.Fragment>
        )}
        {this.props.activeNameAsc && (
          <React.Fragment>
            <img src={nameAsc} alt="nameAsc" />
            <img src={nameAZ} alt="nameAZ" />
          </React.Fragment>
        )}
        {this.props.activeNameDesc && <img src={nameDesc} alt="nameDesc" />}
        {this.props.activeMarkAsc && <img src={markAsc} alt="markAsc" />}
        {this.props.activeMarkDesc && <img src={markDesc} alt="markDesc" />}
        {this.props.activeHighestMarks && (
          <img src={highestMarks} alt="highestMarks" />
        )}
        {this.props.activeLowestMarks && (
          <img src={lowestMarks} alt="lowestMarks" />
        )}
        {this.props.activeFifthHighestMark && (
          <img src={fifthHighestMark} alt="fifthHighestMark" />
        )}
        {this.props.activeTenthLowestMark && (
          <img src={tenthLowestMark} alt="tenthLowestMark" />
        )}
        {this.props.activeNameStartWithS && (
          <img src={nameStartWithS} alt="nameStartWithS" />
        )}
        {this.props.activeNameEndsWithL && (
          <img src={nameEndsWithL} alt="nameEndsWithL" />
        )}
      </div>
    );
  }
}
