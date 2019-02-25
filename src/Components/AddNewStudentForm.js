import React from "react";
const AddNewStudentForm = props => (
  <form className="d-flex" onSubmit={event => props.handleAddStudent(event)}>
    <input
      className="form-control form-control-sm"
      placeholder="enter new student's name"
      type="text"
      name="addStudent"
    />
    <input
      className="btn btn-outline-secondary btn-sm"
      type="submit"
      value="New Student"
    />
  </form>
);

export default AddNewStudentForm;
