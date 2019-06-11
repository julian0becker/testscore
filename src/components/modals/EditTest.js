import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  findIndexStudent,
  findIndexTest,
  calculateGrade,
  calculateAmericanGrade
} from "../../helpers";
import {
  toggleModalAction,
  editTestAction,
  deleteSingleTestAction
} from "../../redux/actions";
import ClassroomContext from "../../context/ClassroomContext";

const EditModal = ({ classroomId }) => {
  const dispatch = useDispatch();
  const { gradeSystem } = useContext(ClassroomContext);
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

  const indexStudent = findIndexStudent(students, modal.forModalStudentId);
  const testIndex = findIndexTest(students, indexStudent, modal.forModalTestId);

  const handleDeleteSingleTest = (idTest, idClassroom) => {
    dispatch(toggleModalAction(idClassroom));
    dispatch(deleteSingleTestAction(idTest, idClassroom));
  };

  const handleEditTest = (event, testId, oldPassMark) => {
    event.preventDefault();

    if (
      parseInt(event.target.editPointsSingle.value) >
      parseInt(event.target.editMaxPointsSingle.value)
    ) {
      return; //reached points must be greater than max points //todo warning modal
    }

    let passMark;

    if (gradeSystem === "uni") {
      passMark = event.target.editPassMark.value;
    } else {
      passMark = oldPassMark;
    }

    let grade = calculateGrade(
      event.target.editPointsSingle.value /
        event.target.editMaxPointsSingle.value,
      passMark
    );
    let americanGrade = calculateAmericanGrade(
      event.target.editPointsSingle.value /
        event.target.editMaxPointsSingle.value
    );

    americanGrade.americanBadgeColor = americanGrade.badgeColor;

    const updatedTest = {
      testName: event.target.editNameSingle.value,
      maxPoints: event.target.editMaxPointsSingle.value,
      passMark: passMark,
      reachedPoints: event.target.editPointsSingle.value,
      testId: testId,
      grade: {
        decimal:
          event.target.editPointsSingle.value /
          event.target.editMaxPointsSingle.value,
        uni: grade.uni,
        american: americanGrade.american,
        badgeColor: grade.badgeColor,
        americanBadgeColor: americanGrade.americanBadgeColor
      }
    };
    dispatch(editTestAction(updatedTest, testId, classroomId));
    dispatch(toggleModalAction(classroomId));
  };

  const width = { maxWidth: "20rem" };

  return (
    <div className="card text-white bg-primary " style={width}>
      <div className="card-header d-flex justify-content-between">
        <div>{students[indexStudent].name}</div>
        <div>
          <i
            onClick={() => dispatch(toggleModalAction(classroomId))}
            className="fas fa-times"
          />
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title">
          {students[indexStudent].tests[testIndex].testName}
        </h4>
        <div className="card-text">
          <form
            onSubmit={event =>
              handleEditTest(
                event,
                students[indexStudent].tests[testIndex].testId,
                students[indexStudent].tests[testIndex].passMark
              )
            }
          >
            <table className="table table-hover m-0">
              <tbody>
                <tr className="table-active">
                  <td>
                    <p className="small mb-0 mt-0">Test Name</p>
                    <input
                      type="text"
                      name="editNameSingle"
                      defaultValue={
                        students[indexStudent].tests[testIndex].testName
                      }
                      required
                    />
                  </td>
                </tr>
                <tr className="table-active">
                  <td>
                    <p className="small mb-0 mt-0">Achieved Points</p>
                    <input
                      type="number"
                      name="editPointsSingle"
                      defaultValue={
                        students[indexStudent].tests[testIndex].reachedPoints
                      }
                      required
                    />
                  </td>
                </tr>
                <tr className="table-active">
                  <td>
                    <p className="small mb-0 mt-0">Max Points</p>
                    <input
                      type="number"
                      name="editMaxPointsSingle"
                      defaultValue={
                        students[indexStudent].tests[testIndex].maxPoints
                      }
                      required
                    />
                  </td>
                </tr>
                {gradeSystem === "uni" ? (
                  <tr className="table-active">
                    <td>
                      <fieldset>
                        <p className="small mb-0 mt-0">Passmark</p>
                        <div className="d-flex">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="editPassMark"
                                id="optionsRadios1"
                                value="50%"
                                checked
                                readOnly={true}
                              />
                              50%
                            </label>
                          </div>
                          <div className="form-check ml-2">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="editPassMark"
                                id="optionsRadios2"
                                value="60%"
                              />
                              60%
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
            <div className="d-flex justify-content-between">
              <input
                type="submit"
                className="btn btn-sm btn-outline-secondary mt-3"
              />
              <div className="d-flex align-items-end">
                <span
                  onClick={() =>
                    handleDeleteSingleTest(
                      students[indexStudent].tests[testIndex].testId,
                      classroomId
                    )
                  }
                  className="fas fa-trash-alt ml-4 mb-2"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
