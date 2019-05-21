import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { findIndexStudent, findIndexTest, calculateGrade } from "../../helpers";
import { toggleModalAction, editTestAction } from "../../redux/actions";

const EditModal = () => {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleModalAction());

  const students = useSelector(state => state.students);
  const modal = useSelector(state => state.modal);

  let testIndex;
  const indexStudent = findIndexStudent(students, modal.forModalStudentId);
  modal.modalType === "edit"
    ? (testIndex = findIndexTest(students, indexStudent, modal.forModalTestId))
    : (testIndex = null);

  const handleEditTest = (event, testId) => {
    event.preventDefault();
    const grade = calculateGrade(
      event.target.editPointsSingle.value /
        event.target.editMaxPointsSingle.value,
      event.target.editPassMark.value
    );
    console.log(testId);

    const updatedTest = {
      testName: event.target.editNameSingle.value,
      maxPoints: event.target.editMaxPointsSingle.value,
      passMark: event.target.editPassMark.value,
      reachedPoints: event.target.editPointsSingle.value,
      testId: testId,
      grade: {
        decimal:
          event.target.editPointsSingle.value /
          event.target.editMaxPointsSingle.value,
        uni: grade.uni,
        badgeColor: grade.badgeColor
      }
    };
    dispatch(editTestAction(updatedTest, testId));
    toggleModal();
  };

  return (
    <div className="card text-white bg-primary " style={{ maxWidth: "20rem" }}>
      <div className="card-header d-flex justify-content-between">
        <div>{modal.modalType === "edit" && students[indexStudent].name}</div>
        <div>
          <i onClick={() => toggleModal()} className="fas fa-times" />
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title">
          {"Edit "}
          {modal.modalType === "edit" &&
            students[indexStudent].tests[testIndex].testName}
        </h4>
        <div className="card-text">
          <form
            onSubmit={event =>
              handleEditTest(
                event,
                students[indexStudent].tests[testIndex].testId
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
                        modal.modalType === "edit" &&
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
                        modal.modalType === "edit" &&
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
                        modal.modalType === "edit" &&
                        students[indexStudent].tests[testIndex].maxPoints
                      }
                      required
                    />
                  </td>
                </tr>
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
              </tbody>
            </table>
            <input
              type="submit"
              className="btn btn-sm btn-outline-secondary mt-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
