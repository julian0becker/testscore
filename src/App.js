import React, { Component } from "react";
import uuid from "uuid";
import Modal from "react-modal";
import "./App.css";
import * as utils from "./utils";

class CreateStudent {
  constructor(name = "Edit Name", results = []) {
    this.name = name;
    this.results = results;
    this.studentId = uuid.v4();
  }
}

class CreateTestAll {
  constructor(testName, maxPoints, passMark) {
    this.testName = testName;
    this.maxPoints = maxPoints;
    this.passMark = passMark;
    this.reachedPoints = "Please Edit";
    this.grade = null;
    this.gradeUniStyle = "edit";
    this.testId = uuid.v4();
    this.badgeStyle = null;
    this.isEditingPoints = null;
  }
}

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
            reachedPoints: 80,
            grade: 0.8,
            gradeUniStyle: "2,0",
            testId: uuid.v4(),
            badgeStyle: "#238823",
            isEditingPoints: null
          },
          {
            testName: "test 2",
            maxPoints: 100,
            passMark: "60%",
            reachedPoints: 95,
            grade: 0.95,
            gradeUniStyle: "1,3",
            testId: uuid.v4(),
            badgeStyle: "#20B2AA",
            isEditingPoints: null
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
            reachedPoints: 50,
            grade: 0.5,
            gradeUniStyle: "4,0",
            testId: uuid.v4(),
            badgeStyle: "#EEB462",
            isEditingPoints: null
          },
          {
            testName: "React.js",
            maxPoints: 100,
            passMark: "50%",
            reachedPoints: 1,
            grade: 0.01,
            gradeUniStyle: "5,0",
            testId: uuid.v4(),
            badgeStyle: "#D2222D",
            isEditingPoints: null
          }
        ],
        studentId: uuid.v4()
      }
    ],
    isModalOn: null,
    typeOfModal: null,
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
      students[index].results.push(
        new CreateTestAll(
          event.target.inputField.value,
          "Please Edit",
          "Please Edit"
        )
      );
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

  handleEditSingleScore = (idTest, idStudent, node) => {
    const students = [...this.state.students];
    const indexStudent = utils.findIndexStudent(students, idStudent);
    const indexTest = utils.findIndexTest(students, indexStudent, idTest);
    students[indexStudent].results[indexTest].isEditingPoints = true;
    students[indexStudent].results[indexTest].gradeUniStyle = (
      <form
        onSubmit={event =>
          this.handleEditCurrentSingleScore(event, idTest, idStudent, node)
        }
      >
        <div className="form-group mb-0">
          <fieldset className="container-fluid">
            <div className="row">
              <input
                className="btn btn-sm mr-1"
                type="submit"
                value="change"
                id="button-single-score"
              />
              <input
                name="editInputSingleScore"
                type="number"
                className="form-control col form-control-sm"
                placeholder="Pts."
                id="input-single-score"
                required
              />
            </div>
          </fieldset>
        </div>
      </form>
    );
    this.setState({ students: students });
  };

  handleEditCurrentSingleScore = (event, idTest, idStudent) => {
    event.preventDefault();

    if (!event.target.editInputSingleScore.value.trim()) {
      alert("enter ooints");
    } else {
      const students = [...this.state.students];
      const indexStudent = utils.findIndexStudent(students, idStudent);
      const indexTest = utils.findIndexTest(students, indexStudent, idTest);

      students[indexStudent].results[indexTest].reachedPoints = parseInt(
        event.target.editInputSingleScore.value
      );

      const grade =
        this.state.students[indexStudent].results[indexTest].reachedPoints /
        this.state.students[indexStudent].results[indexTest].maxPoints;
      const passMark = this.state.students[indexStudent].results[indexTest]
        .passMark;

      this.calculateGrade(grade, passMark, indexStudent, indexTest);
      students[indexStudent].results[indexTest].grade = grade;
      students[indexStudent].results[indexTest].isEditingPoints = false;
      this.setState({
        students: students
      });
    }
  };

  handleAddStudent = event => {
    event.preventDefault();
    if (!event.target.addStudent.value.trim()) {
      alert("enter a name");
    } else {
      const student = new CreateStudent(event.target.addStudent.value.trim());
      const students = [...this.state.students];
      students.push(student);
      this.setState({ students: students });
      event.target.addStudent.value = "";
    }
  };

  handleDeleteStudent = idStudent => {
    const students = [...this.state.students];
    const studentIndex = utils.findIndexStudent(students, idStudent);
    students.splice(studentIndex, 1);
    this.setState({ students: students });
  };

  handleAddTestAll = event => {
    event.preventDefault();
    const students = [...this.state.students];
    students.map(student =>
      student.results.push(
        new CreateTestAll(
          event.target.editNameAll.value,
          event.target.editMaxPointsAll.value,
          event.target.editPassMark.value
        )
      )
    );
    this.setState({ students: students });
    console.log(this.state.students[0].results);
  };

  handleOpenEditModal = (idTest, idStudent) => {
    this.setState({
      isModalOn: true,
      typeOfModal: "edit",
      forModalTestId: idTest,
      forModalStudentId: idStudent
    });
  };

  handleOpenInfoModal = (idTest, idStudent) => {
    this.setState({
      isModalOn: true,
      typeOfModal: "info",
      forModalTestId: idTest,
      forModalStudentId: idStudent
    });
  };

  handleOpenAddTestAllModal = () => {
    this.setState({ isModalOn: true, typeOfModal: "addTestAll" });
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
          handleOpenInfoModal={this.handleOpenInfoModal}
          handleDeleteStudent={this.handleDeleteStudent}
          handleEditSingleScore={this.handleEditSingleScore}
        />
        <ControlForm
          handleAddStudent={this.handleAddStudent}
          handleOpenAddTestAllModal={this.handleOpenAddTestAllModal}
        />
        <EditModal
          students={this.state.students}
          isModalOn={this.state.isModalOn}
          typeOfModal={this.state.typeOfModal}
          handleCloseModal={this.handleCloseModal}
          forModalTestId={this.state.forModalTestId}
          forModalStudentId={this.state.forModalStudentId}
          handleTestEditMulti={this.handleTestEditMulti}
          handleAddTestAll={this.handleAddTestAll}
        />
      </div>
    );
  }
}

export default App;

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
        handleEditSingleTest={props.handleEditSingleTest}
        handleOpenEditModal={props.handleOpenEditModal}
        handleOpenInfoModal={props.handleOpenInfoModal}
        handleDeleteStudent={props.handleDeleteStudent}
        handleEditSingleScore={props.handleEditSingleScore}
      />
    ))}
  </div>
);

const Student = props => (
  <div className="card text-white bg-primary mb-3 m-2">
    <div className="card-header d-flex justify-content-between">
      <div>DaF 187</div>
      <div>
        <i
          onClick={() => props.handleDeleteStudent(props.student.studentId)}
          className="fas fa-times"
        />
      </div>
    </div>
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
              handleOpenInfoModal={props.handleOpenInfoModal}
              handleEditSingleScore={props.handleEditSingleScore}
              isEditingPoints={props.isEditingPoints}
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
              <input
                type="text"
                name="inputField"
                className="form-control col "
              />
              <input
                type="submit"
                value="create"
                className="btn btn-outline-secondary btn-sm"
              />
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  </div>
);

class Result extends Component {
  render() {
    return (
      <li
        style={{ color: "black" }}
        className="list-group-item d-flex justify-content-between align-items-center "
      >
        <div
          id="editName"
          onClick={() =>
            this.props.handleEditSingleTest(
              this.props.result.testId,
              this.props.student.studentId
            )
          }
        >
          {this.props.result.testName}
        </div>
        <div
          className="d-flex justify-content-between icon-container"
          style={
            this.props.result.isEditingPoints
              ? { width: "70%" }
              : { width: "50%" }
          }
        >
          <div
            onClick={() =>
              this.props.handleEditSingleScore(
                this.props.result.testId,
                this.props.student.studentId
              )
            }
            className="editScore badge badge-primary badge-pill align-self-center"
            style={{ backgroundColor: this.props.result.badgeStyle }}
            ref={this.myRef}
          >
            {this.props.result.gradeUniStyle}
          </div>
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
                onClick={() =>
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

const EditModal = props => (
  <Modal
    isOpen={!!props.isModalOn}
    contentLabel={"test this modal"}
    onRequestClose={props.handleCloseModal}
    className="modalStyle"
    ariaHideApp={false}
  >
    <div id="modalForm">
      {props.typeOfModal === "edit" ? (
        <ModalDisplayForEditInput
          handleTestEditMulti={props.handleTestEditMulti}
          forModalTestId={props.forModalTestId}
          forModalStudentId={props.forModalStudentId}
          students={props.students}
        />
      ) : props.typeOfModal === "info" ? (
        <ModalDisplayForTestInfo
          students={props.students}
          forModalTestId={props.forModalTestId}
          forModalStudentId={props.forModalStudentId}
        />
      ) : (
        <ModalDisplayForAddTestAll handleAddTestAll={props.handleAddTestAll} />
      )}
    </div>
  </Modal>
);

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
        <div className="card-header">
          {this.props.students[studentIndex].name}
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
                      <input type="text" name="editNameSingle" />
                    </td>
                  </tr>
                  <tr className="table-active">
                    <td>
                      <p className="small mb-0 mt-0">Achieved Points</p>
                      <input type="number" name="editPointsSingle" />
                    </td>
                  </tr>
                  <tr className="table-active">
                    <td>
                      <p className="small mb-0 mt-0">Max Points</p>
                      <input type="number" name="editMaxPointsSingle" />
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
        <div className="card-header">
          {this.props.students[studentIndex].name}
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

class ModalDisplayForAddTestAll extends Component {
  render() {
    return (
      <div
        className="card text-white bg-primary "
        style={{ maxWidth: "20rem" }}
      >
        <div className="card-header">DaF 187</div>
        <div className="card-body">
          <h4 className="card-title">{"Add New Test "}</h4>
          <div className="card-text">
            <form onSubmit={event => this.props.handleAddTestAll(event)}>
              <table className="table table-hover m-0">
                <tbody>
                  <tr className="table-active">
                    <td>
                      <p className="small mb-0 mt-0">Test Name</p>
                      <input type="text" name="editNameAll" required />
                    </td>
                  </tr>

                  <tr className="table-active">
                    <td>
                      <p className="small mb-0 mt-0">Max Points</p>
                      <input type="number" name="editMaxPointsAll" required />
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

const ControlForm = props => (
  <div>
    <form onSubmit={event => props.handleAddStudent(event)}>
      <input
        placeholder="enter new student's name"
        type="text"
        name="addStudent"
      />
      <input type="submit" value="New Student" />
    </form>
    <button onClick={props.handleOpenAddTestAllModal}> Add New Test </button>
  </div>
);
