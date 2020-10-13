import React, { Component } from "react";

export default class Output extends Component {
  render() {
    return (
      <div className="col_output">
        <p className="heading">Output</p>
        <table className="table border table-striped">
          <tbody>
            <tr>
              {this.props.students.length !== 1 && <td>No</td>}
              <td>Name</td>
              <td>Marks</td>
            </tr>
            {this.props.students.map((stu, i) => (
              <tr key={i}>
                {this.props.students.length !== 1 && <td>{i + 1}</td>}

                <td>{stu.name}</td>
                <td>{stu.mark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
