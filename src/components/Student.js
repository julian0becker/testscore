import React, { useContext } from "react";
import Results from "./Results";
import { useDispatch } from "react-redux";
import { toggleModalAction, addSingleTestAction } from "../redux/actions";
import uuid from "uuid";
import ClassroomContext from "../context/ClassroomContext";
import { getAverageGrade, getAverageAmericanGrade } from "../helpers";

export default function Student({ student }) {
  const { classroomId, classroom, gradeSystem } = useContext(ClassroomContext);
  const dispatch = useDispatch();
  const handleAddSingleTest = () => {
    let passMark;
    if (gradeSystem === "american") {
      passMark = "50%";
    } else {
      passMark = "Please Edit";
    }
    const newTest = {
      testName: "Please edit",
      maxPoints: "Please Edit",
      passMark: passMark,
      reachedPoints: "Please Edit",
      testId: uuid.v4(),
      grade: {
        decimal: "Please Edit",
        american: "edit",
        uni: "edit",
        badgeColor: "#000",
        americanBadgeColor: "#000"
      }
    };
    dispatch(addSingleTestAction(student.studentId, newTest, classroomId));
  };

  const average = getAverageGrade(student);
  const averageAmericanGrade = getAverageAmericanGrade(student);
  console.log(student);
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
                style={
                  gradeSystem === "uni"
                    ? { backgroundColor: average.badgeColor }
                    : { backgroundColor: averageAmericanGrade.badgeColor }
                }
                className="editScore badge badge-primary badge-pill align-self-center"
              >
                {gradeSystem === "uni"
                  ? average.uni
                  : averageAmericanGrade.american}
              </div>
            </li>
          )}
        </div>
      </div>
    </div>
  );
}
