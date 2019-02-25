import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <li
        style={{ color: "black" }}
        className="list-group-item d-flex justify-content-between align-items-center "
      >
        <div id="editName">{this.props.result.testName}</div>
        <div
          className="d-flex justify-content-between icon-container"
          style={
            this.props.result.isEditingPoints
              ? { width: "80%" }
              : { width: "50%" }
          }
        >
          {this.props.result.maxPoints !== "Please Edit" && (
            <div
              onClick={() => {
                if (this.props.result.gradeUniStyle === "edit") {
                  return this.props.handleEditSingleScore(
                    this.props.result.testId,
                    this.props.student.studentId
                  );
                } else {
                  return null;
                }
              }}
              className={
                this.props.result.isEditingPoints
                  ? "is-editing-score-false"
                  : "editScore badge badge-primary badge-pill align-self-center"
              }
              style={
                this.props.result.isEditingPoints
                  ? { backgroundColor: "white" }
                  : { backgroundColor: this.props.result.badgeStyle }
              }
            >
              {this.props.result.gradeUniStyle}
            </div>
          )}
          <div className="d-flex">
            <div>
              <span
                onClick={() =>
                  this.props.handleOpenInfoModal(
                    this.props.result.testId,
                    this.props.student.studentId
                  )
                }
                className="fas fa-info-circle"
              />
            </div>
            <div>
              <span
                onClick={() =>
                  this.props.handleOpenEditModal(
                    this.props.result.testId,
                    this.props.student.studentId
                  )
                }
                className="far fa-edit ml-4"
              />
            </div>
            <div>
              <span
                onDoubleClick={() =>
                  this.props.handleDeleteSingleTest(
                    this.props.result.testId,
                    this.props.student.studentId
                  )
                }
                className="fas fa-trash-alt ml-4"
              />
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Result;
