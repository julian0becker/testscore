import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addClassroomAction } from "../redux/actions";
import uuid from "uuid";

export default function LandingPage() {
  const classrooms = useSelector(state => state.classrooms);
  const [classroom, setClassroom] = useState("");
  const dispatch = useDispatch();

  const addClassroom = newClassroom => {
    dispatch(addClassroomAction(newClassroom));
  };

  const onChange = event => {
    setClassroom(event.target.value);
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
    <div>
      <h1 className="title">Testify</h1>

      <div className="d-flex justify-content-center pb-3">
        <form className="d-flex" onSubmit={onSubmit}>
          <input
            className="form-control form-control-sm"
            placeholder="enter new student's name"
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
      {classrooms.map(classroom => (
        <Link to={`/classroom/${classroom.id}`}>
          <button>{classroom.name}</button>
        </Link>
      ))}
    </div>
  );
}
