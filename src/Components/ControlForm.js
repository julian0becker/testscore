import React from "react";
import AddNewTestAll from "./AddNewTestAll";
import AddNewStudentForm from "./AddNewStudentForm";

const ControlForm = props => (
  <div className="d-flex justify-content-center pb-3">
    <AddNewTestAll
      handleOpenAddTestAllModal={props.handleOpenAddTestAllModal}
    />
    <AddNewStudentForm handleAddStudent={props.handleAddStudent} />
  </div>
);

export default ControlForm;
