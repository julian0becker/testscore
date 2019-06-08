import React, { useContext } from "react";
import Results from "./Results";
import { useDispatch } from "react-redux";
import { toggleModalAction, addSingleTestAction } from "../redux/actions";
import uuid from "uuid";
import ClassroomContext from "../context/ClassroomContext";
import { displayAverageUniversityGrade } from "../helpers";

export default function Student({ student }) {
  const { classroomId, classroom } = useContext(ClassroomContext);
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
        american: "edit",
        uni: "edit",
        badgeColor: "#000"
      }
    };
    dispatch(addSingleTestAction(student.studentId, newTest, classroomId));
  };
  const getAverageGrade = () => {
    const validTests = student.tests.filter(
      test => test.grade.decimal !== "Please Edit"
    );

    let accumulatedUniGrade = 0;
    for (let test of validTests) {
      accumulatedUniGrade += parseFloat(test.grade.uni.replace(",", "."));
    }
    const averageUniGrade = accumulatedUniGrade / validTests.length;
    return displayAverageUniversityGrade(averageUniGrade);
  };
  let average = getAverageGrade();

  return (
    <div className="student-container card text-white bg-primary mb-3 m-2">
      <div className="card-header d-flex justify-content-between">
        <div>{classroom.name}</div>
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
        <div className="card-text h-100 d-flex flex-column justify-content-between">
          <ul className="list-group ">
            {student.tests.map(test => (
              <Results
                key={test.testId}
                test={test}
                studentId={student.studentId}
              />
            ))}
          </ul>
          {average && (
            <li
              className="list-group-item mt-2 d-flex justify-content-between"
              style={{ color: "black" }}
            >
              <div>Average:</div>
              <div
                style={{ backgroundColor: average.badgeColor }}
                className="editScore badge badge-primary badge-pill align-self-center"
              >
                {average.uni}
              </div>
            </li>
          )}
        </div>
      </div>
    </div>
  );
}
