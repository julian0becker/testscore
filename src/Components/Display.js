import React from "react";
import Student from "./Student";
import { connect } from "react-redux";

const Display = props => (
  <div
    className="d-flex flex-wrap justify-content-center"
    style={{ backgroundColor: "#DDDDDD" }}
  >
    {console.log(props.students[0])}
    {props.students.map(student => (
      <Student
        key={student.studentId}
        student={student}
        handleAddTest={props.handleAddTest}
        handleDeleteSingleTest={props.handleDeleteSingleTest}
        handleOpenEditModal={props.handleOpenEditModal}
        handleOpenInfoModal={props.handleOpenInfoModal}
        handleEditSingleScore={props.handleEditSingleScore}
        handleOpenDeleteModal={props.handleOpenDeleteModal}
      />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps)(Display);
