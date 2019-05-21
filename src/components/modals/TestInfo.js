import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { findIndexStudent, findIndexTest } from "../../helpers";
import { toggleModalAction } from "../../redux/actions";

const TestInfo = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const students = useSelector(state => state.students);
  const toggleModal = () => dispatch(toggleModalAction());

  let testIndexForInfo;
  const indexStudentForInfo = findIndexStudent(
    students,
    modal.forModalStudentId
  );
  modal.modalType === "info"
    ? (testIndexForInfo = findIndexTest(
        students,
        indexStudentForInfo,
        modal.forModalTestId
      ))
    : (testIndexForInfo = null);

  let percentRounded;
  modal.modalType === "info"
    ? (percentRounded = Math.round(
        students[indexStudentForInfo].tests[testIndexForInfo].grade.decimal *
          100
      ))
    : (percentRounded = null);

  let percentNotRounded;
  modal.modalType === "info"
    ? (percentNotRounded = (
        students[indexStudentForInfo].tests[testIndexForInfo].grade.decimal *
        100
      ).toFixed(2))
    : (percentNotRounded = null);

  return (
    <div className="card text-white bg-primary " style={{ maxWidth: "20rem" }}>
      <div className="card-header d-flex justify-content-between">
        <div>
          {modal.modalType === "info" && students[indexStudentForInfo].name}
        </div>
        <div>
          <i onClick={() => toggleModal()} className="fas fa-times" />
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title">
          {modal.modalType === "info" &&
            students[indexStudentForInfo].tests[testIndexForInfo].testName}
        </h4>
        <div className="card-text">
          <table className="table table-hover">
            <tbody>
              <tr className="table-active">
                <th scope="row">Points</th>
                <td>
                  {modal.modalType === "info" &&
                    students[indexStudentForInfo].tests[testIndexForInfo]
                      .reachedPoints}{" "}
                  /{" "}
                  {modal.modalType === "info" &&
                    students[indexStudentForInfo].tests[testIndexForInfo]
                      .maxPoints}
                </td>
              </tr>
              <tr className="table-active">
                <th scope="row">Passmark</th>
                <td>
                  {modal.modalType === "info" &&
                    students[indexStudentForInfo].tests[testIndexForInfo]
                      .passMark}
                </td>
              </tr>
              <tr className="table-active">
                <th scope="row">Percent</th>
                <td>
                  {modal.modalType === "info" &&
                  students[indexStudentForInfo].tests[testIndexForInfo]
                    .reachedPoints === "Please Edit"
                    ? "Please Edit"
                    : percentRounded + "% (" + percentNotRounded + "%)"}
                </td>
              </tr>
              <tr className="table-active">
                <th scope="row">Grade</th>
                <td>
                  {modal.modalType === "info" &&
                    students[indexStudentForInfo].tests[testIndexForInfo].grade
                      .uni}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TestInfo;
