import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid";
import { addTestAllAction, toggleModalAction } from "../../redux/actions";
import ClassroomContext from "../../context/ClassroomContext";

const AddTestAll = ({ classroomId }) => {
  const { gradeSystem } = useContext(ClassroomContext);
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleModalAction(classroomId));
  const handleTestAll = event => {
    event.preventDefault();

    let passMark;
    if (gradeSystem === "uni") {
      passMark = event.target.editPassMark.value;
    } else {
      passMark = "50%";
    }
    const test = {
      testName: event.target.editNameAll.value,
      maxPoints: event.target.editMaxPointsAll.value,
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
    dispatch(addTestAllAction(test, classroomId));
    toggleModal();
  };

  return (
    <div className="card text-white bg-primary " style={{ maxWidth: "20rem" }}>
      <div className="card-header d-flex justify-content-between">
        <div>DaF 187</div>
        <div>
          <i onClick={() => toggleModal()} className="fas fa-times" />
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title">{"Add New Test "}</h4>
        <div className="card-text">
          <form onSubmit={event => handleTestAll(event)}>
            <table className="table table-hover m-0">
              <tbody>
                <tr className="table-active">
                  <td>
                    <p className="small mb-0 mt-0">Test Name</p>
                    <input type="text" name="editNameAll" required />
                  </td>
                </tr>

                <tr className="table-active">
                  <td>
                    <p className="small mb-0 mt-0">Max Points</p>
                    <input type="number" name="editMaxPointsAll" required />
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

export default AddTestAll;
