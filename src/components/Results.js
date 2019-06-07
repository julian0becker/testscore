import React, { useContext, useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import {
  deleteSingleTestAction,
  openEditModalAction,
  openInfoModalAction,
  openQuickEditAction
} from "../redux/actions";
import ClassroomContext from "../context/ClassroomContext";
import { calculateGrade } from "../helpers";
import uuid from "uuid";

const initialState = {
  testName: "test2",
  maxPoints: 100,
  passMark: "50%",
  reachedPoints: 81,
  testId: uuid.v4(),
  grade: {
    decimal: 0.81,
    uni: "2,0",
    badgeColor: "#238823"
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "QUICK_EDIT":
      return {
        testName: action.testName,
        maxPoints: action.maxPoints,
        passMark: action.passMark,
        reachedPoints: action.reachedPoints,
        testId: action.testId,
        grade: {
          decimal: action.decimal,
          uni: action.uni,
          badgeColor: action.badgeColor
        }
      };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { ...state };
  }
}

export default function Results({ test, studentId }) {
  const [quickEdit, setQuickEdit] = useState(false);
  const [reducerOn, setReducerOn] = useState(false);
  const [stateLocal, dispatchLocal] = useReducer(reducer, initialState);
  console.log(stateLocal);

  const dispatch = useDispatch();
  const { classroomId } = useContext(ClassroomContext);

  const handleOpenQuickEdit = () => {
    if (test.grade.uni === "edit" && test.maxPoints !== "Please Edit") {
      const jsx = (
        <form
          onSubmit={event => {
            event.preventDefault();
            const points = event.target.quickEditPoints.value;
            const decimal = parseInt(points) / parseInt(test.maxPoints);
            const grade = calculateGrade(decimal, test.passMark);
            // quickEditAction(points, grade, decimal);
            dispatchLocal({
              type: "QUICK_EDIT",
              testName: test.testName,
              maxPoints: test.maxPoints,
              passMark: test.passMark,
              reachedPoints: points,
              testId: uuid.v4(),
              decimal: decimal,
              uni: grade.uni,
              badgeColor: grade.badgeColor
            });
            setReducerOn(true);
            setQuickEdit(false);
          }}
        >
          <div className="form-group mb-0 d-flex">
            <input
              className="btn btn-primary btn-sm mr-1"
              type="submit"
              value="edit"
            />
            <input
              id="quick-edit"
              name="quickEditPoints"
              placeholder={"Pts. / " + test.maxPoints}
              type="number"
              required
            />
          </div>
        </form>
      );
      dispatch(openQuickEditAction(classroomId, studentId, test.testId, jsx));
      setQuickEdit(true);
    }
  };

  return (
    <li
      style={{ color: "black" }}
      className="list-group-item d-flex justify-content-between align-items-center "
    >
      {reducerOn ? (
        <div>{stateLocal.testName}</div>
      ) : (
        <div>{test.testName}</div>
      )}
      <div className="d-flex justify-content-between icon-container">
        {reducerOn ? (
          <div
            onClick={() => handleOpenQuickEdit()}
            style={{ backgroundColor: stateLocal.grade.badgeColor }}
            className="editScore badge badge-primary badge-pill align-self-center"
          >
            {stateLocal.grade.uni}
          </div>
        ) : (
          <div
            onClick={() => handleOpenQuickEdit()}
            style={{ backgroundColor: test.grade.badgeColor }}
            className="editScore badge badge-primary badge-pill align-self-center"
          >
            {test.grade.uni}
          </div>
        )}
        {quickEdit ? null : (
          <div className="d-flex">
            <div>
              <span
                onClick={() =>
                  dispatch(
                    openInfoModalAction(test.testId, studentId, classroomId)
                  )
                }
                className="fas fa-info-circle"
              />
            </div>
            <div>
              <span
                onClick={() =>
                  dispatch(
                    openEditModalAction(test.testId, studentId, classroomId)
                  )
                }
                className="far fa-edit ml-4"
              />
            </div>
            <div>
              <span
                onClick={() =>
                  dispatch(deleteSingleTestAction(test.testId, classroomId))
                }
                className="fas fa-trash-alt ml-4"
              />
            </div>
          </div>
        )}
      </div>
    </li>
  );
}
