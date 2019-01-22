import React, { Component } from "react";
import uuid from "uuid";
import "./App.css";

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
            reachedPoints: 76,
            testId: uuid.v4()
          },
          {
            testName: "test 2",
            maxPoints: 100,
            passMark: "50%",
            reachedPoints: 83,
            testId: uuid.v4()
          }
        ],
        studentId: uuid.v4()
      },
      {
        name: "Claudio",
        results: [
          {
            testName: "Javescript",
            maxPoints: 100,
            passMark: "50%",
            reachedPoints: "Failed",
            testId: uuid.v4()
          },
          {
            testName: "React.js",
            maxPoints: 100,
            passMark: "50%",
            reachedPoints: "Failed",
            testId: uuid.v4()
          }
        ],
        studentId: uuid.v4()
      }
    ]
  };

  handleAddTest = (event, idStudent) => {
    event.preventDefault();

    if (!event.target.inputField.value.trim()) {
      alert("enter a name");
    } else {
      const students = [...this.state.students];
      const index = students.findIndex(
        student => student.studentId === idStudent
      );
      students[index].results.push({
        testName: event.target.inputField.value,
        maxPoints: null,
        passMark: null,
        reachedPoints: null,
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
    const indexStudent = students.findIndex(
      student => student.studentId === idStudent
    );
    const indexTest = students[indexStudent].results.findIndex(
      test => test.testId === idTest
    );

    students[indexStudent].results.splice(indexTest, 1);

    this.setState({ students: students });
  };

  handleEditSingleTest = () => {
    console.log("hello");
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
        />
        <div>form</div>
      </div>
    );
  }
}

export default App;

const Display = props => (
  <div className="d-flex flex-wrap">
    {props.students.map(student => (
      <Student
        key={student.studentId}
        student={student}
        handleAddTest={props.handleAddTest}
        handleDeleteSingleTest={props.handleDeleteSingleTest}
        handleEditSingleTest={props.handleEditSingleTest}
      />
    ))}
  </div>
);

const Student = props => (
  <div
    className="card text-white bg-primary mb-3"
    style={{ minWidth: "14rem", margin: "1rem" }}
  >
    <div className="card-header">DaF 187</div>
    <div className="card-body">
      <h4 className="card-title">{props.student.name}</h4>
      <div className="card-text d-flex flex-column ">
        <ul className="list-group">
          {props.student.results.map(result => (
            <Result
              key={result.testId}
              student={props.student}
              result={result}
              handleDeleteSingleTest={props.handleDeleteSingleTest}
              handleEditSingleTest={props.handleEditSingleTest}
            />
          ))}
        </ul>
        <form
          className="mt-3 "
          onSubmit={event =>
            props.handleAddTest(event, props.student.studentId)
          }
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
  </div>
);

const Result = props => (
  <li
    style={{ color: "black" }}
    className="list-group-item d-flex justify-content-between align-items-center "
  >
    {props.result.testName}
    <div>
      <span className="badge badge-primary badge-pill">
        {props.result.reachedPoints}
      </span>
      <span onClick={props.handleEditSingleTest} className="far fa-edit ml-4" />
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
