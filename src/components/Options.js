import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentAction, openAddTestAllModalAction } from "../redux/actions";
import uuid from "uuid";

export default function Options({ classroomId }) {
  const [student, setStudent] = useState("");
  const dispatch = useDispatch();

  const addStudent = student =>
    dispatch(addStudentAction(student, classroomId));

  const onChange = event => {
    setStudent(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (student.trim() === "") return;
    addStudent({
      name: student,
      tests: [],
      studentId: uuid.v4()
    });
    setStudent("");
  };

  return (
    <div className="d-flex justify-content-center pb-3">
      <button
        onClick={() => dispatch(openAddTestAllModalAction())}
        className="btn btn-outline-secondary btn-sm"
      >
        Add New Tests
      </button>
      <form className="d-flex" onSubmit={onSubmit}>
        <input
          className="form-control form-control-sm"
          placeholder="enter new student's name"
          type="text"
          value={student}
          onChange={onChange}
        />
        <input
          className="btn btn-outline-secondary btn-sm"
          type="submit"
          value="New Student"
        />
      </form>
    </div>
  );
}
