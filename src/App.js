import React, { Component } from "react";
import uuid from "uuid";
import Modal from "react-modal";
import "./App.css";
import * as utils from "./utils";

class App extends Component {
  state = {
    students: [
      {
        name: "Julian",
        results: [
          {
            testName: "test 1",
            maxPoints: 100,
            passMark: "50%",
            reachedPoints: "Please Edit",
            grade: null,
            gradeUniStyle: null,
            testId: uuid.v4(),
            badgeStyle: null
          },
          {
            testName: "test 2",
            maxPoints: 100,
            passMark: "50%",
            reachedPoints: "Please Edit",
            grade: null,
            gradeUniStyle: null,
            testId: uuid.v4()
          }
        ],
        studentId: uuid.v4()
      },
      {
        name: "Claudio",
        results: [
          {
            testName: "JavaScript",
            maxPoints: 100,
            passMark: "50%",
            reachedPoints: "Please Edit",
            grade: null,
            gradeUniStyle: null,
            testId: uuid.v4()
          },
          {
            testName: "React.js",
            maxPoints: 100,
            passMark: "50%",
            reachedPoints: "Please Edit",
            grade: null,
            gradeUniStyle: null,
            testId: uuid.v4()
          }
        ],
        studentId: uuid.v4()
      }
    ],
    isModalOn: null,
    forModalTestId: null,
    forModalStudentId: null
  };

  handleAddTest = (event, idStudent) => {
    event.preventDefault();

    if (!event.target.inputField.value.trim()) {
      alert("enter a name");
    } else {
      const students = [...this.state.students];
      const index = utils.findIndexStudent(students, idStudent);
      students[index].results.push({
        testName: event.target.inputField.value,
        maxPoints: null,
        passMark: null,
        reachedPoints: "Please Edit",
        grade: null,
        gradeUniStyle: null,
        testId: uuid.v4()
      });
      this.setState({
        students: students
      });
      event.target.inputField.value = "";
    }
  };

  handleDeleteSingleTest = (idTest, idStudent) => {
    const students = [...this.state.students];
    const indexStudent = utils.findIndexStudent(students, idStudent);
    const indexTest = utils.findIndexTest(students, indexStudent, idTest);
    students[indexStudent].results.splice(indexTest, 1);
    this.setState({ students: students });
  };

  handleEditSingleTest = (idTest, idStudent) => {
    const students = [...this.state.students];
    const indexStudent = utils.findIndexStudent(students, idStudent);
    const indexTest = utils.findIndexTest(students, indexStudent, idTest);

    students[indexStudent].results[indexTest].testName = (
      <form
        onSubmit={event =>
          this.handleEditCurrentSingleTest(event, idTest, idStudent)
        }
      >
        <div className="form-group mb-0">
          <fieldset className="container-fluid">
            <div className="row">
              <input
                className="btn btn-sm mr-1"
                type="submit"
                value="change :"
              />
              <input
                name="editInputField"
                className="form-control col form-control-sm"
                placeholder="new name"
              />
            </div>
          </fieldset>
        </div>
      </form>
    );
    this.setState({ students: students });
  };

  handleEditCurrentSingleTest = (event, idTest, idStudent) => {
    event.preventDefault();

    if (!event.target.editInputField.value.trim()) {
      alert("enter a name");
    } else {
      const students = [...this.state.students];
      const indexStudent = utils.findIndexStudent(students, idStudent);
      const indexTest = utils.findIndexTest(students, indexStudent, idTest);

      students[indexStudent].results[indexTest].testName =
        event.target.editInputField.value;

      this.setState({ students: students });
    }
  };

  handleOpenEditModal = (idTest, idStudent) => {
    this.setState({
      isModalOn: true,
      forModalTestId: idTest,
      forModalStudentId: idStudent
    });
  };

  handleCloseModal = () => {
    this.setState({ isModalOn: false });
  };

  handleTestEditMulti = (event, idTest, idStudent) => {
    event.preventDefault();
    const students = [...this.state.students];
    const indexStudent = utils.findIndexStudent(students, idStudent);
    const indexTest = utils.findIndexTest(students, indexStudent, idTest);

    students[indexStudent].results[indexTest].testName =
      event.target.editNameSingle.value;
    students[indexStudent].results[indexTest].reachedPoints =
      event.target.editPointsSingle.value;
    students[indexStudent].results[indexTest].maxPoints =
      event.target.editMaxPointsSingle.value;
    students[indexStudent].results[indexTest].passMark =
      event.target.editPassMark.value;

    const grade =
      event.target.editPointsSingle.value /
      event.target.editMaxPointsSingle.value;
    students[indexStudent].results[indexTest].grade = grade;
    const passMark = event.target.editPassMark.value;

    this.setState({ students: students, isModalOn: false });
    this.calculateGrade(grade, passMark, indexStudent, indexTest);
  };

  calculateGrade = (grade, passMark, indexStudent, indexTest) => {
    const students = [...this.state.students];
    const x = grade;
    console.log(passMark);

    if (passMark === "50%") {
      switch (true) {
        case x < 0.5:
          students[indexStudent].results[indexTest].gradeUniStyle = "5,0";
          students[indexStudent].results[indexTest].badgeStyle = "#D2222D";
          this.setState({ students: students });
          break;
        case x < 0.55:
          students[indexStudent].results[indexTest].gradeUniStyle = "4,0";
          students[indexStudent].results[indexTest].badgeStyle = "#EEB462";
          this.setState({ students: students });
          break;
        case x < 0.6:
          students[indexStudent].results[indexTest].gradeUniStyle = "3,7";
          students[indexStudent].results[indexTest].badgeStyle = "#EEB462";
          this.setState({ students: students });
          break;
        case x < 0.65:
          students[indexStudent].results[indexTest].gradeUniStyle = "3,3";
          students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
          this.setState({ students: students });
          break;
        case x < 0.7:
          students[indexStudent].results[indexTest].gradeUniStyle = "3,0";
          students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
          this.setState({ students: students });
          break;
        case x < 0.75:
          students[indexStudent].results[indexTest].gradeUniStyle = "2,7";
          students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
          this.setState({ students: students });
          break;
        case x < 0.8:
          students[indexStudent].results[indexTest].gradeUniStyle = "2,3";
          students[indexStudent].results[indexTest].badgeStyle = "#238823";
          this.setState({ students: students });
          break;
        case x < 0.85:
          students[indexStudent].results[indexTest].gradeUniStyle = "2,0";
          students[indexStudent].results[indexTest].badgeStyle = "#238823";
          this.setState({ students: students });
          break;
        case x < 0.9:
          students[indexStudent].results[indexTest].gradeUniStyle = "1,7";
          students[indexStudent].results[indexTest].badgeStyle = "#238823";
          this.setState({ students: students });
          break;
        case x < 0.95:
          students[indexStudent].results[indexTest].gradeUniStyle = "1,3";
          students[indexStudent].results[indexTest].badgeStyle = "#20B2AA";
          this.setState({ students: students });
          break;
        case x <= 1:
          students[indexStudent].results[indexTest].gradeUniStyle = "1,0";
          students[indexStudent].results[indexTest].badgeStyle = "#20B2AA";
          this.setState({ students: students });
          break;
        default:
          break;
      }
    } else {
      switch (true) {
        case x < 0.6:
          students[indexStudent].results[indexTest].gradeUniStyle = "5,0";
          students[indexStudent].results[indexTest].badgeStyle = "#D2222D";
          this.setState({ students: students });
          break;
        case x < 0.64:
          students[indexStudent].results[indexTest].gradeUniStyle = "4,0";
          students[indexStudent].results[indexTest].badgeStyle = "#EEB462";
          this.setState({ students: students });
          break;
        case x < 0.68:
          students[indexStudent].results[indexTest].gradeUniStyle = "3,7";
          students[indexStudent].results[indexTest].badgeStyle = "#EEB462";
          this.setState({ students: students });
          break;
        case x < 0.72:
          students[indexStudent].results[indexTest].gradeUniStyle = "3,3";
          students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
          this.setState({ students: students });
          break;
        case x < 0.76:
          students[indexStudent].results[indexTest].gradeUniStyle = "3,0";
          students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
          this.setState({ students: students });
          break;
        case x < 0.8:
          students[indexStudent].results[indexTest].gradeUniStyle = "2,7";
          students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
          this.setState({ students: students });
          break;
        case x < 0.84:
          students[indexStudent].results[indexTest].gradeUniStyle = "2,3";
          students[indexStudent].results[indexTest].badgeStyle = "#238823";
          this.setState({ students: students });
          break;
        case x < 0.88:
          students[indexStudent].results[indexTest].gradeUniStyle = "2,0";
          students[indexStudent].results[indexTest].badgeStyle = "#238823";
          this.setState({ students: students });
          break;
        case x < 0.92:
          students[indexStudent].results[indexTest].gradeUniStyle = "1,7";
          students[indexStudent].results[indexTest].badgeStyle = "#238823";
          this.setState({ students: students });
          break;
        case x < 0.96:
          students[indexStudent].results[indexTest].gradeUniStyle = "1,3";
          students[indexStudent].results[indexTest].badgeStyle = "#20B2AA";
          this.setState({ students: students });
          break;
        case x <= 1:
          students[indexStudent].results[indexTest].gradeUniStyle = "1,0";
          students[indexStudent].results[indexTest].badgeStyle = "#20B2AA";
          this.setState({ students: students });
          break;
        default:
          break;
      }
    }
  };

  render() {
    return (
      <div>
        <div>navigation</div>
        <Display
          students={this.state.students}
          handleAddTest={this.handleAddTest}
          handleDeleteSingleTest={this.handleDeleteSingleTest}
          handleEditSingleTest={this.handleEditSingleTest}
          handleOpenEditModal={this.handleOpenEditModal}
        />
        <div>form</div>
        <EditModal
          isModalOn={this.state.isModalOn}
          handleCloseModal={this.handleCloseModal}
          forModalTestId={this.state.forModalTestId}
          forModalStudentId={this.state.forModalStudentId}
          handleTestEditMulti={this.handleTestEditMulti}
        />
      </div>
    );
  }
}

export default App;

const Display = props => (
  <div className="d-flex flex-wrap justify-content-center">
    {props.students.map(student => (
      <Student
        key={student.studentId}
        student={student}
        handleAddTest={props.handleAddTest}
        handleDeleteSingleTest={props.handleDeleteSingleTest}
        handleEditSingleTest={props.handleEditSingleTest}
        handleOpenEditModal={props.handleOpenEditModal}
      />
    ))}
  </div>
);

const Student = props => (
  <div className="card text-white bg-primary mb-3 m-2">
    <div className="card-header">DaF 187</div>
    <div className="card-body d-flex flex-column justify-content-between">
      <h4 className="card-title">{props.student.name}</h4>
      <div className="card-text  ">
        <ul className="list-group">
          {props.student.results.map(result => (
            <Result
              key={result.testId}
              student={props.student}
              result={result}
              handleDeleteSingleTest={props.handleDeleteSingleTest}
              handleEditSingleTest={props.handleEditSingleTest}
              handleOpenEditModal={props.handleOpenEditModal}
            />
          ))}
        </ul>
      </div>
      <form
        className="mt-3 "
        onSubmit={event => props.handleAddTest(event, props.student.studentId)}
      >
        <div className="form-group">
          <fieldset className="container-fluid">
            <div className="row">
              <input name="inputField" className="form-control col" />
              <input
                type="submit"
                value="create"
                className="btn btn-outline-secondary"
              />
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  </div>
);

const Result = props => (
  <li
    style={{ color: "black" }}
    className="list-group-item d-flex justify-content-between align-items-center "
  >
    <div
      id="editName"
      onClick={() =>
        props.handleEditSingleTest(props.result.testId, props.student.studentId)
      }
    >
      {props.result.testName}
    </div>
    <div>
      <span
        className="badge badge-primary badge-pill"
        style={{ backgroundColor: props.result.badgeStyle }}
      >
        {props.result.gradeUniStyle}
      </span>
      <span
        onClick={() =>
          props.handleOpenEditModal(
            props.result.testId,
            props.student.studentId
          )
        }
        className="far fa-edit ml-4"
      />
      <span
        onClick={() =>
          props.handleDeleteSingleTest(
            props.result.testId,
            props.student.studentId
          )
        }
        className="fas fa-trash-alt ml-4"
      />
    </div>
  </li>
);

const EditModal = props => (
  <Modal
    isOpen={!!props.isModalOn}
    contentLabel={"test this modal"}
    onRequestClose={props.handleCloseModal}
    className="modalStyle"
    ariaHideApp={false}
  >
    <div id="modalForm">
      <form
        onSubmit={event =>
          props.handleTestEditMulti(
            event,
            props.forModalTestId,
            props.forModalStudentId
          )
        }
      >
        <input type="text" name="editNameSingle" placeholder="Test Name" />
        <input
          type="number"
          name="editPointsSingle"
          placeholder="Achieved Points"
        />
        <input
          type="number"
          name="editMaxPointsSingle"
          placeholder="Max Points"
        />
        <fieldset>
          <p className="small mb-0 mt-2">Passmark</p>
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
        <input
          type="submit"
          className="btn btn-sm btn-outline-secondary mt-3"
        />
      </form>
    </div>
  </Modal>
);
