import React from "react";
import Student from "./Student";

const Display = props => (
  <div
    className="d-flex flex-wrap justify-content-center"
    style={{ backgroundColor: "#DDDDDD" }}
  >
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

export default Display;
