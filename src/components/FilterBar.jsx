import React, { Component } from "react";

import "../styles/filter_bar.css";

export default class FilterBar extends Component {
  render() {
    return (
      <div className="col_filter">
        <ul className="list-group">
          <li
            className={
              localStorage.getItem("students")
                ? this.props.activeNameAsc
                  ? "list-group-item active-filter"
                  : "list-group-item"
                : "list-group-item disabled"
            }
            onClick={() =>
              this.props.nameAsc(JSON.parse(localStorage.getItem("students")))
            }
          >
            Names A - Z
          </li>

          <li
            className={
              localStorage.getItem("students")
                ? this.props.activeNameDesc
                  ? "list-group-item active-filter"
                  : "list-group-item"
                : "list-group-item disabled"
            }
            onClick={() =>
              this.props.nameDesc(JSON.parse(localStorage.getItem("students")))
            }
            disabled={localStorage.getItem("students") ? true : false}
          >
            Names Z - A
          </li>
          <li
            className={
              localStorage.getItem("students")
                ? this.props.activeMarkAsc
                  ? "list-group-item active-filter"
                  : "list-group-item"
                : "list-group-item disabled"
            }
            onClick={() =>
              this.props.markAsc(JSON.parse(localStorage.getItem("students")))
            }
            disabled={localStorage.getItem("students") ? true : false}
          >
            Marks Low - High
          </li>
          <li
            className={
              localStorage.getItem("students")
                ? this.props.activeMarkDesc
                  ? "list-group-item active-filter"
                  : "list-group-item"
                : "list-group-item disabled"
            }
            onClick={() =>
              this.props.markDesc(JSON.parse(localStorage.getItem("students")))
            }
          >
            Marks High - Low
          </li>
          <li
            className={
              localStorage.getItem("students")
                ? this.props.activeHighestMarks
                  ? "list-group-item active-filter"
                  : "list-group-item"
                : "list-group-item disabled"
            }
            onClick={() =>
              this.props.highestMarks(
                JSON.parse(localStorage.getItem("students"))
              )
            }
          >
            Highest Marks
          </li>
          <li
            className={
              localStorage.getItem("students")
                ? this.props.activeLowestMarks
                  ? "list-group-item active-filter"
                  : "list-group-item"
                : "list-group-item disabled"
            }
            onClick={() =>
              this.props.lowestMarks(
                JSON.parse(localStorage.getItem("students"))
              )
            }
          >
            Lowest Marks
          </li>
          <li
            className={
              localStorage.getItem("students")
                ? this.props.activeFifthHighestMark
                  ? "list-group-item active-filter"
                  : "list-group-item"
                : "list-group-item disabled"
            }
            onClick={() =>
              this.props.fifthHighestMark(
                JSON.parse(localStorage.getItem("students"))
              )
            }
          >
            5th Highest Mark
          </li>
          <li
            className={
              localStorage.getItem("students")
                ? this.props.activeTenthLowestMark
                  ? "list-group-item active-filter"
                  : "list-group-item"
                : "list-group-item disabled"
            }
            onClick={() =>
              this.props.tenthLowestMark(
                JSON.parse(localStorage.getItem("students"))
              )
            }
          >
            10th Lowest mark
          </li>
          <li
            className={
              localStorage.getItem("students")
                ? this.props.activeNameStartWithS
                  ? "list-group-item active-filter"
                  : "list-group-item"
                : "list-group-item disabled"
            }
            onClick={() =>
              this.props.nameStartWithS(
                JSON.parse(localStorage.getItem("students"))
              )
            }
          >
            Name start with "S"
          </li>
          <li
            className={
              localStorage.getItem("students")
                ? this.props.activeNameEndsWithL
                  ? "list-group-item active-filter"
                  : "list-group-item"
                : "list-group-item disabled"
            }
            onClick={() =>
              this.props.nameEndsWithL(
                JSON.parse(localStorage.getItem("students"))
              )
            }
          >
            Name ends with "L"
          </li>
        </ul>
      </div>
    );
  }
}
