import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";

class CreateStudent {
  constructor(name = "Edit Name", results = []) {
    this.name = name;
    this.results = results;
    this.studentId = uuid.v4();
  }
}

class AddNewStudentForm extends Component {
  handleClick = event => {
    event.preventDefault();
    this.props.handleAddStudent(
      new CreateStudent(event.target.addStudent.value.trim())
    );

    // if (!event.target.addStudent.value.trim()) {
    //   this.setState({
    //     isModalOn: true,
    //     typeOfModal: "alert",
    //     forModalMessage: "Enter a name."
    //   });
    // } else {
    //   const student = new CreateStudent(event.target.addStudent.value.trim());
    //   const students = [...this.state.students];
    //   students.push(student);
    //   this.setState({ students: students });
    //   event.target.addStudent.value = "";
    // }
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

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => {
  return {
    handleAddStudent: studentData => {
      dispatch({ type: "ADD_STUDENT", student: studentData });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewStudentForm);
