import React, { Component } from "react";
import * as utils from "../utils";

class ModalDisplayForTestInfo extends Component {
  render() {
    const students = [...this.props.students];
    const studentIndex = utils.findIndexStudent(
      students,
      this.props.forModalStudentId
    );
    const testIndex = utils.findIndexTest(
      students,
      studentIndex,
      this.props.forModalTestId
    );
    const percentRounded = Math.round(
      this.props.students[studentIndex].results[testIndex].grade * 100
    );
    const percentNotRounded = (
      this.props.students[studentIndex].results[testIndex].grade * 100
    ).toFixed(2);

    return (
      <div
        className="card text-white bg-primary "
        style={{ maxWidth: "20rem" }}
      >
        <div className="card-header d-flex justify-content-between">
          <div> {this.props.students[studentIndex].name}</div>{" "}
          <div>
            <i onClick={this.props.handleCloseModal} className="fas fa-times" />
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            {this.props.students[studentIndex].results[testIndex].testName}
          </h4>
          <div className="card-text">
            <table className="table table-hover">
              <tbody>
                <tr className="table-active">
                  <th scope="row">Points</th>
                  <td>
                    {
                      this.props.students[studentIndex].results[testIndex]
                        .reachedPoints
                    }{" "}
                    /{" "}
                    {
                      this.props.students[studentIndex].results[testIndex]
                        .maxPoints
                    }
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Passmark</th>
                  <td>
                    {
                      this.props.students[studentIndex].results[testIndex]
                        .passMark
                    }
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Percent</th>
                  <td>
                    {percentRounded}
                    {"% ("}
                    {percentNotRounded}
                    {"%)"}
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Grade</th>
                  <td>
                    {
                      this.props.students[studentIndex].results[testIndex]
                        .gradeUniStyle
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalDisplayForTestInfo;
