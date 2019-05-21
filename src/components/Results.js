import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteSingleTestAction,
  openEditModalAction,
  openInfoModalAction
} from "../redux/actions";

export default function Results({ test, studentId }) {
  const dispatch = useDispatch();

  const handleOpenInfoModal = testId => {
    dispatch(openInfoModalAction(testId, studentId));
  };
  const handleOpenEditModal = testId => {
    dispatch(openEditModalAction(testId, studentId));
  };
  const handleDeleteSingleTest = testId => {
    dispatch(deleteSingleTestAction(testId));
  };
  return (
    <li
      style={{ color: "black" }}
      className="list-group-item d-flex justify-content-between align-items-center "
    >
      <div>{test.testName}</div>
      <div className="d-flex justify-content-between icon-container">
        <div
          style={{ backgroundColor: test.grade.badgeColor }}
          className="editScore badge badge-primary badge-pill align-self-center"
        >
          {test.grade.uni}
        </div>
        <div className="d-flex">
          <div>
            <span
              onClick={() => handleOpenInfoModal(test.testId)}
              className="fas fa-info-circle"
            />
          </div>
          <div>
            <span
              onClick={() => handleOpenEditModal(test.testId)}
              className="far fa-edit ml-4"
            />
          </div>
          <div>
            <span
              onClick={() => handleDeleteSingleTest(test.testId)}
              className="fas fa-trash-alt ml-4"
            />
          </div>
        </div>
      </div>
    </li>
  );
}