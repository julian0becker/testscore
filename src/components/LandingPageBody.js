import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addClassroomAction, deleteClassroomAction } from "../redux/actions";
import { Link } from "react-router-dom";
import uuid from "uuid";

export default function LandingPageBody({
  setClassroomId,
  setIsEditModalOpen
}) {
  const classrooms = useSelector(state => state.classrooms);
  const [classroom, setClassroom] = useState("");
  const dispatch = useDispatch();

  const handleEditClick = classroomId => {
    setClassroomId(classroomId);
    setIsEditModalOpen(true);
  };

  const onChange = event => {
    setClassroom(event.target.value);
  };

  const addClassroom = newClassroom => {
    dispatch(addClassroomAction(newClassroom));
  };

  const onSubmit = event => {
    event.preventDefault();
    if (classroom.trim() === "") return;
    addClassroom({
      name: classroom,
      id: uuid.v4(),
      modal: {
        isModalOpen: false,
        forModalStudentId: null,
        forModalTestId: null,
        modalType: null
      },
      students: []
    });
    setClassroom("");
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center pb-2 mb-2">
        <form className="d-flex" onSubmit={onSubmit}>
          <input
            className="form-control form-control-sm"
            placeholder="new classroom name"
            type="text"
            value={classroom}
            onChange={onChange}
          />
          <input
            className="btn btn-outline-secondary btn-sm"
            type="submit"
            value="New Classroom"
          />
        </form>
      </div>
      <div className="d-flex flex-wrap justify-content-center classroom">
        {classrooms.map(classroom => (
          <div className="student-container card text-white bg-primary mb-3 m-2">
            <div className="card-header d-flex justify-content-between">
              <div className="text-white">
                <i
                  onClick={() => handleEditClick(classroom.id)}
                  className="far fa-edit"
                />
              </div>
              <div>
                <i
                  onDoubleClick={() =>
                    dispatch(deleteClassroomAction(classroom.id))
                  }
                  className="fas fa-times"
                />
              </div>
            </div>
            <Link to={`/classroom/${classroom.id}`}>
              <div className="card-body d-flex flex-column classroom-link">
                <div className="d-flex justify-content-between">
                  <h3 className=" mb-2 classroom-name">{classroom.name}</h3>
                </div>
                <div className="card-text">
                  <ul className="list-group mb-3">
                    <li
                      style={{ color: "black" }}
                      className="list-group-item d-flex justify-content-between align-items-center mt-1 mb-1 pt-1 pb-1 "
                    >
                      {classroom.students.length === 1
                        ? `${classroom.students.length} Student`
                        : `${classroom.students.length} Students`}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
