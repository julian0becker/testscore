import React, { Component } from "react";
import CreateStudent from "../classes/CreateStudent";
import { connect } from "react-redux";
import { handleAddStudent, handleEnterName } from "../modules/actions";

class AddNewStudentForm extends Component {
  handleClick = event => {
    event.preventDefault();

    if (!event.target.addStudent.value.trim()) {
      this.props.handleEnterName();
    } else {
      this.props.handleAddStudent(
        new CreateStudent(event.target.addStudent.value.trim())
      );
      event.target.addStudent.value = "";
    }
  };

  render() {
    return (
      <form className="d-flex" onSubmit={event => this.handleClick(event)}>
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
  }
}

const mapDispatchToProps = {
  handleAddStudent,
  handleEnterName
};

export default connect(
  null,
  mapDispatchToProps
)(AddNewStudentForm);
