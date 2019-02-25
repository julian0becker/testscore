import React from "react";
const AddNewTestAll = props => (
  <div>
    <button
      className="btn btn-outline-secondary btn-sm"
      onClick={props.handleOpenAddTestAllModal}
    >
      Add New Test
    </button>
  </div>
);

export default AddNewTestAll;
