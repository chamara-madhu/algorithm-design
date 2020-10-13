import React, { Component } from "react";

import Alert from "@material-ui/lab/Alert";

export default class Output extends Component {
  render() {
    return (
      <div className="col_output">
        <p className="heading">Output</p>
        {!localStorage.getItem("students") && (
          <Alert severity="warning">
            Please create table first to handle events.
          </Alert>
        )}
        {localStorage.getItem("students") && (
          <table className="table border table-striped">
            <tbody>
              <tr
                style={{
                  background: "#cca326",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                {this.props.students.length !== 1 && <td>No</td>}
                <td>Name</td>
                <td align="center">Marks</td>
              </tr>
              {this.props.students.map((stu, i) => (
                <tr key={i}>
                  {this.props.students.length !== 1 && <td>{i + 1}</td>}

                  <td>{stu.name}</td>
                  <td align="center">{stu.mark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
