import React from "react";

const ModalDelete = props => (
  <div style={{ backgroundColor: "#1a1a1a" }}>
    <h5 className="text-danger ml-2 mr-2 mb-0 p-3 ">Do you want to delete?</h5>
    <div className="d-flex justify-content-around w-100 p-3">
      <button
        className="btn btn-outline-secondary"
        onClick={() => props.handleDeleteStudent(props.forModalStudentId)}
      >
        Yes
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={props.handleCloseModal}
      >
        No
      </button>
    </div>
  </div>
);
export default ModalDelete;
