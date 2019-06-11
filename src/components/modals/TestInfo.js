import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findIndexStudent, findIndexTest } from "../../helpers";
import { toggleModalAction } from "../../redux/actions";
import ClassroomContext from "../../context/ClassroomContext";

const TestInfo = ({ classroomId }) => {
  const { gradeSystem } = useContext(ClassroomContext);
  const dispatch = useDispatch();
  const modal = useSelector(state => {
    const classroom = state.classrooms.filter(
      classroom => classroom.id === classroomId
    );
    return classroom[0].modal;
  });

  const students = useSelector(state => {
    const classroom = state.classrooms.filter(
      classroom => classroom.id === classroomId
    );
    return classroom[0].students;
  });
  const toggleModal = () => dispatch(toggleModalAction(classroomId));

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

  //styles
  const width = { maxWidth: "20rem" };

  return (
    <div className="card text-white bg-primary " style={width}>
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
              {gradeSystem === "uni" ? (
                <tr className="table-active">
                  <th scope="row">Passmark</th>
                  <td>
                    {
                      students[indexStudentForInfo].tests[testIndexForInfo]
                        .passMark
                    }
                  </td>
                </tr>
              ) : null}
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
                  {gradeSystem === "uni"
                    ? students[indexStudentForInfo].tests[testIndexForInfo]
                        .grade.uni
                    : students[indexStudentForInfo].tests[testIndexForInfo]
                        .grade.american}
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
