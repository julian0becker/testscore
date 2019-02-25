import React, { Component } from "react";
import uuid from "uuid";
import "../App.css";
import * as utils from "../utils";
import Display from "./Display";
import EditModal from "./EditModal";
import ControlForm from "./ControlForm";
import Footer from "./Footer";

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
            reachedPoints: 80,
            grade: 0.8,
            gradeUniStyle: "2,0",
            testId: uuid.v4(),
            badgeStyle: "#238823",
            isEditingPoints: null
          },
          {
            testName: "React.js",
            maxPoints: 100,
            passMark: "50%",
            reachedPoints: 79,
            grade: 0.79,
            gradeUniStyle: "2,3",
            testId: uuid.v4(),
            badgeStyle: "#238823",
            isEditingPoints: null
          }
        ],
        studentId: uuid.v4()
      }
    ],
    isModalOn: null,
    typeOfModal: null,
    forModalTestId: null,
    forModalStudentId: null,
    forModalMessage: null
  };

  handleAddTest = (event, idStudent) => {
    event.preventDefault();

    if (!event.target.inputField.value.trim()) {
      this.setState({
        isModalOn: true,
        typeOfModal: "alert",
        forModalMessage: "Enter a name."
      });
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
        <div className="form-group mb-0 d-flex">
          <input
            className="btn btn-primary btn-sm mr-1"
            type="submit"
            value="edit"
            id="button-single-score"
          />
          <input
            name="editInputSingleScore"
            type="number"
            className="form-control col form-control-sm"
            placeholder={
              "Pts. / " + students[indexStudent].results[indexTest].maxPoints
            }
            id="input-single-score"
            required
          />
        </div>
      </form>
    );
    this.setState({ students: students });
  };

  handleEditCurrentSingleScore = (event, idTest, idStudent) => {
    event.preventDefault();
    const students = [...this.state.students];
    const indexStudent = utils.findIndexStudent(students, idStudent);
    const indexTest = utils.findIndexTest(students, indexStudent, idTest);

    if (
      parseInt(event.target.editInputSingleScore.value) >
      this.state.students[indexStudent].results[indexTest].maxPoints
    ) {
      this.setState({
        isModalOn: true,
        typeOfModal: "alert",
        forModalMessage: "Achieved points must be lower than max. points."
      });
    } else {
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
      this.setState({
        isModalOn: true,
        typeOfModal: "alert",
        forModalMessage: "Enter a name."
      });
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
    this.setState({ students: students, isModalOn: false });
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
    this.setState({ students: students, isModalOn: false });
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

  handleOpenDeleteModal = idStudent => {
    this.setState({
      isModalOn: true,
      typeOfModal: "delete",
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

    if (
      parseInt(event.target.editPointsSingle.value) >
      parseInt(event.target.editMaxPointsSingle.value)
    ) {
      this.setState({
        isModalOn: true,
        typeOfModal: "alert",
        forModalMessage: "Achieved points must be lower than max. points."
      });
    } else {
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
    }
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

  componentDidMount() {
    const json = localStorage.getItem("students");
    const students = JSON.parse(json);
    if (!!students) {
      this.setState({ students: students });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.students);
    localStorage.setItem("students", json);
  }

  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center text-secondary">
          Testify
        </h1>
        <ControlForm
          handleAddStudent={this.handleAddStudent}
          handleOpenAddTestAllModal={this.handleOpenAddTestAllModal}
        />
        <Display
          students={this.state.students}
          handleAddTest={this.handleAddTest}
          handleOpenEditModal={this.handleOpenEditModal}
          handleOpenInfoModal={this.handleOpenInfoModal}
          handleOpenDeleteModal={this.handleOpenDeleteModal}
          handleDeleteSingleTest={this.handleDeleteSingleTest}
          handleEditSingleScore={this.handleEditSingleScore}
        />
        <Footer />

        <EditModal
          students={this.state.students}
          isModalOn={this.state.isModalOn}
          typeOfModal={this.state.typeOfModal}
          handleCloseModal={this.handleCloseModal}
          forModalTestId={this.state.forModalTestId}
          forModalStudentId={this.state.forModalStudentId}
          handleTestEditMulti={this.handleTestEditMulti}
          handleAddTestAll={this.handleAddTestAll}
          handleDeleteStudent={this.handleDeleteStudent}
          forModalMessage={this.state.forModalMessage}
        />
      </div>
    );
  }
}

export default App;
