import React, { Component } from "react";
import * as utils from "../utils";

class ModalDisplayForEditInput extends Component {
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

    return (
      <div
        className="card text-white bg-primary "
        style={{ maxWidth: "20rem" }}
      >
        <div className="card-header d-flex justify-content-between">
          <div>{this.props.students[studentIndex].name}</div>
          <div>
            <i onClick={this.props.handleCloseModal} className="fas fa-times" />
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            {"Edit "}
            {this.props.students[studentIndex].results[testIndex].testName}
          </h4>
          <div className="card-text">
            <form
              onSubmit={event =>
                this.props.handleTestEditMulti(
                  event,
                  this.props.forModalTestId,
                  this.props.forModalStudentId
                )
              }
            >
              <table className="table table-hover m-0">
                <tbody>
                  <tr className="table-active">
                    <td>
                      <p className="small mb-0 mt-0">Test Name</p>
                      <input
                        type="text"
                        name="editNameSingle"
                        defaultValue={
                          this.props.students[studentIndex].results[testIndex]
                            .testName
                        }
                        required
                      />
                    </td>
                  </tr>
                  <tr className="table-active">
                    <td>
                      <p className="small mb-0 mt-0">Achieved Points</p>
                      <input
                        type="number"
                        name="editPointsSingle"
                        defaultValue={
                          this.props.students[studentIndex].results[testIndex]
                            .reachedPoints
                        }
                        required
                      />
                    </td>
                  </tr>
                  <tr className="table-active">
                    <td>
                      <p className="small mb-0 mt-0">Max Points</p>
                      <input
                        type="number"
                        name="editMaxPointsSingle"
                        defaultValue={
                          this.props.students[studentIndex].results[testIndex]
                            .maxPoints
                        }
                        required
                      />
                    </td>
                  </tr>
                  <tr className="table-active">
                    <td>
                      <fieldset>
                        <p className="small mb-0 mt-0">Passmark</p>
                        <div className="d-flex">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="editPassMark"
                                id="optionsRadios1"
                                value="50%"
                                checked
                                readOnly={true}
                              />
                              50%
                            </label>
                          </div>
                          <div className="form-check ml-2">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="editPassMark"
                                id="optionsRadios2"
                                value="60%"
                              />
                              60%
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </td>
                  </tr>
                </tbody>
              </table>
              <input
                type="submit"
                className="btn btn-sm btn-outline-secondary mt-3"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalDisplayForEditInput;
