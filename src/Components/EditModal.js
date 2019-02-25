import React from "react";
import Modal from "react-modal";
import ModalDisplayForEditInput from "./ModalDisplayForEditInput";
import ModalDisplayForTestInfo from "./ModalDisplayForTestInfo";
import ModalDisplayForAddTestAll from "./ModalDisplayForAddTestAll";
import ModalDelete from "./ModalDelete";
import ModalAlert from "./ModalAlert";
import { connect } from "react-redux";

const EditModal = props => (
  <Modal
    isOpen={!!props.isModalOn}
    contentLabel={"test this modal"}
    onRequestClose={props.handleCloseModal}
    className="modalStyle"
    ariaHideApp={false}
  >
    <div id="modalForm">
      {props.typeOfModal === "edit" ? (
        <ModalDisplayForEditInput
          handleTestEditMulti={props.handleTestEditMulti}
          forModalTestId={props.forModalTestId}
          forModalStudentId={props.forModalStudentId}
          students={props.students}
          handleCloseModal={props.handleCloseModal}
        />
      ) : props.typeOfModal === "info" ? (
        <ModalDisplayForTestInfo
          students={props.students}
          forModalTestId={props.forModalTestId}
          forModalStudentId={props.forModalStudentId}
          handleCloseModal={props.handleCloseModal}
        />
      ) : props.typeOfModal === "addTestAll" ? (
        <ModalDisplayForAddTestAll
          handleAddTestAll={props.handleAddTestAll}
          handleCloseModal={props.handleCloseModal}
        />
      ) : props.typeOfModal === "delete" ? (
        <ModalDelete
          handleDeleteStudent={props.handleDeleteStudent}
          forModalStudentId={props.forModalStudentId}
          students={props.students}
          handleCloseModal={props.handleCloseModal}
        />
      ) : (
        <ModalAlert
          forModalMessage={props.forModalMessage}
          handleCloseModal={props.handleCloseModal}
        />
      )}
    </div>
  </Modal>
);

const mapStateToProps = state => {
  return {
    isModalOn: state.isModalOn,
    typeOfModal: state.typeOfModal,
    forModalTestId: state.forModalTestId,
    forModalStudentId: state.forModalStudentId,
    forModalMessage: state.forModalMessage,
    students: state.students
  };
};

export default connect(mapStateToProps)(EditModal);
