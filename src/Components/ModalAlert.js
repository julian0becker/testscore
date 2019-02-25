import React from "react";

const ModalAlert = props => (
  <div
    className="card text-white bg-primary  h-100"
    style={{ maxWidth: "20rem" }}
  >
    <div className="card-header p-1 mr-2">
      <div className="d-flex justify-content-end">
        <i onClick={props.handleCloseModal} className="fas fa-times" />
      </div>
    </div>
    <div className="card-body">
      <h4 className="card-title">{props.forModalMessage}</h4>
    </div>
  </div>
);

export default ModalAlert;
