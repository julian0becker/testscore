import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import {
  deleteSingleTestAction,
  openEditModalAction,
  openInfoModalAction
} from "../redux/actions";
import ClassroomContext from "../context/ClassroomContext";

export default function Results({ test, studentId }) {
  const dispatch = useDispatch();
  const { classroomId, gradeSystem } = useContext(ClassroomContext);

  return (
    <li
      style={{ color: "black" }}
      className="list-group-item d-flex justify-content-between align-items-center "
    >
      <div>{test.testName}</div>
      <div className="d-flex justify-content-between icon-container">
        <div
          style={
            gradeSystem === "uni"
              ? { backgroundColor: test.grade.badgeColor }
              : { backgroundColor: test.grade.americanBadgeColor }
          }
          className="editScore badge badge-primary badge-pill align-self-center"
        >
          {gradeSystem === "uni" ? test.grade.uni : test.grade.american}
        </div>
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
      </div>
    </li>
  );
}
