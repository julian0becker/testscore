import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalAction, deleteStudentAction } from "../../redux/actions";

const DeleteModal = ({ classroomId }) => {
  const dispatch = useDispatch();
  const studentId = useSelector(state => {
    const classroom = state.classrooms.filter(
      classroom => classroom.id === classroomId
    );
    return classroom[0].modal.forModalStudentId;
  });
  const toggleModal = () => dispatch(toggleModalAction(classroomId));
  const handleDeleteStudent = studentId => {
    dispatch(deleteStudentAction(studentId, classroomId));
    toggleModal();
  };

  //styles
  const backgroundColor = { backgroundColor: "#1a1a1a" };

  return (
    <div style={backgroundColor}>
      <h5 className="text-danger ml-2 mr-2 mb-0 p-3 ">
        Do you want to delete?
      </h5>
      <div className="d-flex justify-content-around w-100 p-3">
        <button
          onClick={() => handleDeleteStudent(studentId)}
          className="btn btn-outline-secondary"
        >
          Yes
        </button>
        <button
          onClick={() => toggleModal()}
          className="btn btn-outline-secondary"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
