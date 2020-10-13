import React, { Component } from "react";
import { Drawer } from "@material-ui/core";

import FilterBarMobi from "./FilterBarMobi";
import Code from "./Code";

import "../styles/filte_code_div.css";

export default class FilterCodeDiv extends Component {
  state = {
    leftDrawer: false,
    rightDrawer: false,
  };

  // drawer user account
  toggleDrawerLeft = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ leftDrawer: open });
  };

  // drawer user account
  toggleDrawerRight = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ rightDrawer: open });
  };

  closeDrawer = () => {
    this.setState({ leftDrawer: false, rightDrawer: false });
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar sticky-top navbar-light bg-dark text-light filte_code_div">
          <span className="" href="#" onClick={this.toggleDrawerLeft(true)}>
            <i className="fas fa-filter"></i> Filter
          </span>

          <span
            className="code_btn"
            href="#"
            onClick={this.toggleDrawerRight(true)}
          >
            <i className="fas fa-code"></i> Code
          </span>
        </nav>

        <Drawer
          anchor={"left"}
          open={this.state.leftDrawer}
          onClose={this.toggleDrawerLeft(false)}
        >
          <FilterBarMobi
            closeDrawer={this.closeDrawer}
            nameAsc={this.props.nameAsc}
            nameDesc={this.props.nameDesc}
            markAsc={this.props.markAsc}
            markDesc={this.props.markDesc}
            highestMarks={this.props.highestMarks}
            lowestMarks={this.props.lowestMarks}
            fifthHighestMark={this.props.fifthHighestMark}
            tenthLowestMark={this.props.tenthLowestMark}
            nameStartWithS={this.props.nameStartWithS}
            nameEndsWithL={this.props.nameEndsWithL}
            activeNameAsc={this.props.activeNameAsc}
            activeNameDesc={this.props.activeNameDesc}
            activeMarkAsc={this.props.activeMarkAsc}
            activeMarkDesc={this.props.activeMarkDesc}
            activeHighestMarks={this.props.activeHighestMarks}
            activeLowestMarks={this.props.activeLowestMarks}
            activeFifthHighestMark={this.props.activeFifthHighestMark}
            activeTenthLowestMark={this.props.activeTenthLowestMark}
            activeNameStartWithS={this.props.activeNameStartWithS}
            activeNameEndsWithL={this.props.activeNameEndsWithL}
          />
        </Drawer>

        <Drawer
          anchor={"right"}
          open={this.state.rightDrawer}
          onClose={this.toggleDrawerRight(false)}
        >
          <Code
            closeDrawer={this.closeDrawer}
            activeTable={this.props.activeTable}
            activeNameAsc={this.props.activeNameAsc}
            activeNameDesc={this.props.activeNameDesc}
            activeMarkAsc={this.props.activeMarkAsc}
            activeMarkDesc={this.props.activeMarkDesc}
            activeHighestMarks={this.props.activeHighestMarks}
            activeLowestMarks={this.props.activeLowestMarks}
            activeFifthHighestMark={this.props.activeFifthHighestMark}
            activeTenthLowestMark={this.props.activeTenthLowestMark}
            activeNameStartWithS={this.props.activeNameStartWithS}
            activeNameEndsWithL={this.props.activeNameEndsWithL}
          />
        </Drawer>
      </React.Fragment>
    );
  }
}
