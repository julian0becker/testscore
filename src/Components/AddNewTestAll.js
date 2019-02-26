import React from "react";
import { connect } from "react-redux";
import { handleOpenAddTestAllModal } from "../modules/actions";

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

const mapDispatchToProps = {
  handleOpenAddTestAllModal
};

export default connect(
  null,
  mapDispatchToProps
)(AddNewTestAll);
