import React, { Component } from "react";

import FilterBar from "./FilterBar";
import CreateStudInput from "./CreateStudInput";
import Output from "./Output";
import Code from "./Code";
import FilterCodeDiv from "./FilterCodeDiv";

import "../styles/common.css";

export default class FirstQuestion extends Component {
  state = {
    noOfStud: null,
    students: [],
    lowestMark: null,

    activeTable: true,
    activeNameAsc: false,
    activeNameDesc: false,
    activeMarkAsc: false,
    activeMarkDesc: false,
    activeHighestMarks: false,
    activeLowestMarks: false,
    activeFifthHighestMark: false,
    activeTenthLowestMark: false,
    activeNameStartWithS: false,
    activeNameEndsWithL: false,
  };

  componentDidMount = () => {
    if (localStorage.getItem("students")) {
      this.setState({
        students: JSON.parse(localStorage.getItem("students")),
      });
    }
  };

  handleNoOfStud = (e) => {
    this.setState({ noOfStud: e.target.value });
  };

  // create students marks array
  createStudsMarksArr = () => {
    // check students availability
    if (this.state.noOfStud) {
      const data = [];
      for (let i = 0; i < this.state.noOfStud; i++) {
        // create object for a student
        const obj = {
          name: this.getRandomName(),
          mark: this.getRandomMark(),
        };

        // push to the data array
        data.push(obj);
      }

      // update react student state
      this.setState({
        students: data,
        noOfStud: "",
        activeTable: true,
        activeNameAsc: false,
        activeNameDesc: false,
        activeMarkAsc: false,
        activeMarkDesc: false,
        activeHighestMarks: false,
        activeLowestMarks: false,
        activeFifthHighestMark: false,
        activeTenthLowestMark: false,
        activeNameStartWithS: false,
        activeNameEndsWithL: false,
      });

      // store in local storage
      localStorage.setItem("students", JSON.stringify(data));
    }
  };

  // create random students names with 3 letters
  getRandomName = () => {
    let randomChars = "abcdefghijklmnopqrstuvwxyz";
    let name = "";
    for (let i = 0; i < 3; i++) {
      name += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return name;
  };

  // create random marks that between 0 to 100
  getRandomMark = () => {
    let randomChars = "0123456789";
    let mark = "";
    for (let i = 0; i < 2; i++) {
      mark += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return mark;
  };

  // name A to Z
  nameAsc = (arr) => {
    let swapp;
    let len = arr.length - 1;
    let nameAsc = arr;
    do {
      swapp = false;
      for (let i = 0; i < len; i++) {
        // buuble sort
        if (nameAsc[i].name > nameAsc[i + 1].name) {
          let temp = nameAsc[i];
          nameAsc[i] = nameAsc[i + 1];
          nameAsc[i + 1] = temp;
          swapp = true;
        }
      }
      len--;
    } while (swapp);

    // update react students state
    this.setState({
      students: nameAsc,
      activeTable: false,
      activeNameAsc: true,
      activeNameDesc: false,
      activeMarkAsc: false,
      activeMarkDesc: false,
      activeHighestMarks: false,
      activeLowestMarks: false,
      activeFifthHighestMark: false,
      activeTenthLowestMark: false,
      activeNameStartWithS: false,
      activeNameEndsWithL: false,
    });
  };

  // names Z to A
  nameDesc = (arr) => {
    let swapp;
    let len = arr.length - 1;
    let nameDesc = arr;
    do {
      swapp = false;
      for (let i = 0; i < len; i++) {
        // buuble sort
        if (nameDesc[i].name < nameDesc[i + 1].name) {
          let temp = nameDesc[i];
          nameDesc[i] = nameDesc[i + 1];
          nameDesc[i + 1] = temp;
          swapp = true;
        }
      }
      len--;
    } while (swapp);

    // update react students state
    this.setState({
      students: nameDesc,
      activeTable: false,
      activeNameAsc: false,
      activeNameDesc: true,
      activeMarkAsc: false,
      activeMarkDesc: false,
      activeHighestMarks: false,
      activeLowestMarks: false,
      activeFifthHighestMark: false,
      activeTenthLowestMark: false,
      activeNameStartWithS: false,
      activeNameEndsWithL: false,
    });
  };

  // marks low to high
  markAsc = (arr) => {
    let swapp;
    let len = arr.length - 1;
    let markAsc = arr;
    do {
      swapp = false;
      for (let i = 0; i < len; i++) {
        // buuble sort
        if (markAsc[i].mark > markAsc[i + 1].mark) {
          let temp = markAsc[i];
          markAsc[i] = markAsc[i + 1];
          markAsc[i + 1] = temp;
          swapp = true;
        }
      }
      len--;
    } while (swapp);

    // update react students state
    this.setState({
      students: markAsc,
      activeTable: false,
      activeNameAsc: false,
      activeNameDesc: false,
      activeMarkAsc: true,
      activeMarkDesc: false,
      activeHighestMarks: false,
      activeLowestMarks: false,
      activeFifthHighestMark: false,
      activeTenthLowestMark: false,
      activeNameStartWithS: false,
      activeNameEndsWithL: false,
    });

    return markAsc;
  };

  // marks high to low
  markDesc = (arr) => {
    let swapp;
    let len = arr.length - 1;
    let markDesc = arr;
    do {
      swapp = false;
      for (let i = 0; i < len; i++) {
        // buuble sort
        if (markDesc[i].mark < markDesc[i + 1].mark) {
          var temp = markDesc[i];
          markDesc[i] = markDesc[i + 1];
          markDesc[i + 1] = temp;
          swapp = true;
        }
      }
      len--;
    } while (swapp);

    // update react students state
    this.setState({
      students: markDesc,
      activeTable: false,
      activeNameAsc: false,
      activeNameDesc: false,
      activeMarkAsc: false,
      activeMarkDesc: true,
      activeHighestMarks: false,
      activeLowestMarks: false,
      activeFifthHighestMark: false,
      activeTenthLowestMark: false,
      activeNameStartWithS: false,
      activeNameEndsWithL: false,
    });

    return markDesc;
  };

  // highest mark students
  highestMarks = (arr) => {
    let len = arr.length,
      highest = -Infinity,
      highestMarkStud = [];
    while (len--) {
      if (arr[len].mark > highest) {
        highest = arr[len].mark;
        highestMarkStud = [arr[len]];
      } else if (arr[len].mark === highest) {
        highestMarkStud = [...highestMarkStud, arr[len]];
      }
    }

    // update react students state
    this.setState({
      students: highestMarkStud,
      activeTable: false,
      activeNameAsc: false,
      activeNameDesc: false,
      activeMarkAsc: false,
      activeMarkDesc: false,
      activeHighestMarks: true,
      activeLowestMarks: false,
      activeFifthHighestMark: false,
      activeTenthLowestMark: false,
      activeNameStartWithS: false,
      activeNameEndsWithL: false,
    });
  };

  // lowest marks students
  lowestMarks = (arr) => {
    let len = arr.length,
      min = Infinity,
      lowestMarkStud = [];
    while (len--) {
      if (arr[len].mark < min) {
        min = arr[len].mark;
        lowestMarkStud = [arr[len]];
      } else if (arr[len].mark === min) {
        lowestMarkStud = [...lowestMarkStud, arr[len]];
      }
    }

    // update react students state
    this.setState({
      students: lowestMarkStud,
      activeTable: false,
      activeNameAsc: false,
      activeNameDesc: false,
      activeMarkAsc: false,
      activeMarkDesc: false,
      activeHighestMarks: false,
      activeLowestMarks: true,
      activeFifthHighestMark: false,
      activeTenthLowestMark: false,
      activeNameStartWithS: false,
      activeNameEndsWithL: false,
    });
  };

  // 5th highest mark student
  fifthHighestMark = (arr) => {
    // call marks desc function
    let desc = this.markDesc(arr);

    // then get 4th index if desc.length is equal or greater than 5
    if (desc.length >= 5) {
      this.setState({
        students: [desc[4]],
        activeTable: false,
        activeNameAsc: false,
        activeNameDesc: false,
        activeMarkAsc: false,
        activeMarkDesc: false,
        activeHighestMarks: false,
        activeLowestMarks: false,
        activeFifthHighestMark: true,
        activeTenthLowestMark: false,
        activeNameStartWithS: false,
        activeNameEndsWithL: false,
      });
    } else {
      this.setState({
        students: [],
      });
    }
  };

  // 10th lowest mark student
  tenthLowestMark = (arr) => {
    // call marks asc function
    let asc = this.markAsc(arr);

    // then get 9th index if asc.length is equal or greater than 5
    if (asc.length >= 10) {
      this.setState({
        students: [asc[9]],
        activeTable: false,
        activeNameAsc: false,
        activeNameDesc: false,
        activeMarkAsc: false,
        activeMarkDesc: false,
        activeHighestMarks: false,
        activeLowestMarks: false,
        activeFifthHighestMark: false,
        activeTenthLowestMark: true,
        activeNameStartWithS: false,
        activeNameEndsWithL: false,
      });
    } else {
      this.setState({
        students: [],
      });
    }
  };

  // name starts with "S"
  nameStartWithS = (arr) => {
    let len = arr.length,
      nameStartWithS = [];
    while (len--) {
      if (arr[len].name.charAt(0) === "s") {
        nameStartWithS = [...nameStartWithS, arr[len]];
      }
    }

    // update react students state
    this.setState({
      students: nameStartWithS,
      activeTable: false,
      activeNameAsc: false,
      activeNameDesc: false,
      activeMarkAsc: false,
      activeMarkDesc: false,
      activeHighestMarks: false,
      activeLowestMarks: false,
      activeFifthHighestMark: false,
      activeTenthLowestMark: false,
      activeNameStartWithS: true,
      activeNameEndsWithL: false,
    });
  };

  // name ends with "l"
  nameEndsWithL = (arr) => {
    let len = arr.length,
      nameEndWithL = [];
    while (len--) {
      if (arr[len].name.charAt(2) === "l") {
        nameEndWithL = [...nameEndWithL, arr[len]];
      }
    }

    // update react students state
    this.setState({
      students: nameEndWithL,
      activeNameAsc: false,
      activeNameDesc: false,
      activeMarkAsc: false,
      activeMarkDesc: false,
      activeHighestMarks: false,
      activeLowestMarks: false,
      activeFifthHighestMark: false,
      activeTenthLowestMark: false,
      activeNameStartWithS: false,
      activeNameEndsWithL: true,
    });
  };

  render() {
    return (
      <div className="container-fluid px-0 px-sm-3 py-0 py-sm-3 py-md-5">
        <div className="container cus-container p-0">
          <div className="row m-0">
            <FilterBar
              nameAsc={this.nameAsc}
              nameDesc={this.nameDesc}
              markAsc={this.markAsc}
              markDesc={this.markDesc}
              highestMarks={this.highestMarks}
              lowestMarks={this.lowestMarks}
              fifthHighestMark={this.fifthHighestMark}
              tenthLowestMark={this.tenthLowestMark}
              nameStartWithS={this.nameStartWithS}
              nameEndsWithL={this.nameEndsWithL}
              activeNameAsc={this.state.activeNameAsc}
              activeNameDesc={this.state.activeNameDesc}
              activeMarkAsc={this.state.activeMarkAsc}
              activeMarkDesc={this.state.activeMarkDesc}
              activeHighestMarks={this.state.activeHighestMarks}
              activeLowestMarks={this.state.activeLowestMarks}
              activeFifthHighestMark={this.state.activeFifthHighestMark}
              activeTenthLowestMark={this.state.activeTenthLowestMark}
              activeNameStartWithS={this.state.activeNameStartWithS}
              activeNameEndsWithL={this.state.activeNameEndsWithL}
            />
            <div className="col_content">
              <CreateStudInput
                noOfStud={this.state.noOfStud}
                handleNoOfStud={this.handleNoOfStud}
                createStudsMarksArr={this.createStudsMarksArr}
              />

              <FilterCodeDiv
                nameAsc={this.nameAsc}
                nameDesc={this.nameDesc}
                markAsc={this.markAsc}
                markDesc={this.markDesc}
                highestMarks={this.highestMarks}
                lowestMarks={this.lowestMarks}
                fifthHighestMark={this.fifthHighestMark}
                tenthLowestMark={this.tenthLowestMark}
                nameStartWithS={this.nameStartWithS}
                nameEndsWithL={this.nameEndsWithL}
                activeTable={this.state.activeTable}
                activeNameAsc={this.state.activeNameAsc}
                activeNameDesc={this.state.activeNameDesc}
                activeMarkAsc={this.state.activeMarkAsc}
                activeMarkDesc={this.state.activeMarkDesc}
                activeHighestMarks={this.state.activeHighestMarks}
                activeLowestMarks={this.state.activeLowestMarks}
                activeFifthHighestMark={this.state.activeFifthHighestMark}
                activeTenthLowestMark={this.state.activeTenthLowestMark}
                activeNameStartWithS={this.state.activeNameStartWithS}
                activeNameEndsWithL={this.state.activeNameEndsWithL}
              />

              <div className="row m-0">
                <Output students={this.state.students} />
                <Code
                  activeTable={this.state.activeTable}
                  activeNameAsc={this.state.activeNameAsc}
                  activeNameDesc={this.state.activeNameDesc}
                  activeMarkAsc={this.state.activeMarkAsc}
                  activeMarkDesc={this.state.activeMarkDesc}
                  activeHighestMarks={this.state.activeHighestMarks}
                  activeLowestMarks={this.state.activeLowestMarks}
                  activeFifthHighestMark={this.state.activeFifthHighestMark}
                  activeTenthLowestMark={this.state.activeTenthLowestMark}
                  activeNameStartWithS={this.state.activeNameStartWithS}
                  activeNameEndsWithL={this.state.activeNameEndsWithL}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
