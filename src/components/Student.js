import React from "react";
import Results from "./Results";
import { useDispatch } from "react-redux";
import { toggleModalAction, addSingleTestAction } from "../redux/actions";
import uuid from "uuid";

export default function Student({ student, classroomId }) {
  const dispatch = useDispatch();
  const handleAddSingleTest = () => {
    const newTest = {
      testName: "Please edit",
      maxPoints: "Please Edit",
      passMark: "Please Edit",
      reachedPoints: "Please Edit",
      testId: uuid.v4(),
      grade: {
        decimal: "Please Edit",
        uni: "edit",
        badgeColor: "#000"
      }
    };
    dispatch(addSingleTestAction(student.studentId, newTest));
  };

  return (
    <div className="student-container card text-white bg-primary mb-3 m-2">
      <div className="card-header d-flex justify-content-between">
        <div>DaF 187</div>
        <div>
          <i
            onClick={() =>
              dispatch(toggleModalAction(classroomId, student.studentId))
            }
            className="fas fa-times"
          />
        </div>
      </div>
      <div className="card-body d-flex flex-column ">
        <div className="d-flex justify-content-between">
          <h4 className="card-title">{student.name}</h4>
          <button
            onClick={() => handleAddSingleTest()}
            className="btn btn-outline-secondary btn-sm mb-2"
          >
            Add Test
          </button>
        </div>
        <div className="card-text">
          <ul className="list-group">
            {student.tests.map(test => (
              <Results
                key={test.testId}
                test={test}
                studentId={student.studentId}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
