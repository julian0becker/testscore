import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editClassroomNameAction } from "../../redux/actions";

export default function EditClassroom({ setIsEditModalOpen, classroomId }) {
  const [classroomName, setClassroomName] = useState("");
  const dispatch = useDispatch();

  const editClassroomName = newClassroomName => {
    dispatch(editClassroomNameAction(newClassroomName, classroomId));
  };

  const onChange = event => {
    setClassroomName(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (classroomName.trim() === "") return;
    editClassroomName(classroomName);
    setIsEditModalOpen(false);
  };
  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <h5 className="text-white ml-2 mr-2 mb-0 p-3 ">Edit Classroom Name</h5>
      <div className="d-flex justify-content-around w-100 p-3">
        <form className="d-flex" onSubmit={onSubmit}>
          <input
            className="form-control form-control-sm"
            placeholder="new classroom name"
            type="text"
            value={classroomName}
            onChange={onChange}
          />
          <input
            className="btn btn-outline-secondary btn-sm"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}
