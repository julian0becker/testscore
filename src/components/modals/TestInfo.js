import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { findIndexStudent, findIndexTest } from "../../helpers";
import { toggleModalAction } from "../../redux/actions";

const TestInfo = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const students = useSelector(state => state.students);
  const toggleModal = () => dispatch(toggleModalAction());

  const indexStudentForInfo = findIndexStudent(
    students,
    modal.forModalStudentId
  );

  const testIndexForInfo = findIndexTest(
    students,
    indexStudentForInfo,
    modal.forModalTestId
  );

  const percentRounded = Math.round(
    students[indexStudentForInfo].tests[testIndexForInfo].grade.decimal * 100
  );

  const percentNotRounded = (
    students[indexStudentForInfo].tests[testIndexForInfo].grade.decimal * 100
  ).toFixed(2);

  return (
    <div className="card text-white bg-primary " style={{ maxWidth: "20rem" }}>
      <div className="card-header d-flex justify-content-between">
        <div>{students[indexStudentForInfo].name}</div>
        <div>
          <i onClick={() => toggleModal()} className="fas fa-times" />
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title">
          {students[indexStudentForInfo].tests[testIndexForInfo].testName}
        </h4>
        <div className="card-text">
          <table className="table table-hover">
            <tbody>
              <tr className="table-active">
                <th scope="row">Points</th>
                <td>
                  {
                    students[indexStudentForInfo].tests[testIndexForInfo]
                      .reachedPoints
                  }{" "}
                  /{" "}
                  {
                    students[indexStudentForInfo].tests[testIndexForInfo]
                      .maxPoints
                  }
                </td>
              </tr>
              <tr className="table-active">
                <th scope="row">Passmark</th>
                <td>
                  {
                    students[indexStudentForInfo].tests[testIndexForInfo]
                      .passMark
                  }
                </td>
              </tr>
              <tr className="table-active">
                <th scope="row">Percent</th>
                <td>
                  {students[indexStudentForInfo].tests[testIndexForInfo]
                    .reachedPoints === "Please Edit"
                    ? "Please Edit"
                    : percentRounded + "% (" + percentNotRounded + "%)"}
                </td>
              </tr>
              <tr className="table-active">
                <th scope="row">Grade</th>
                <td>
                  {
                    students[indexStudentForInfo].tests[testIndexForInfo].grade
                      .uni
                  }
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
