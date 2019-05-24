import React from "react";
import { useDispatch } from "react-redux";
import ReactModal from "react-modal";
import { toggleModalAction } from "../redux/actions";
import TestInfo from "./modals/TestInfo";
import DeleteModal from "./modals/DeleteStudent";
import EditModal from "./modals/EditTest";
import AddTestAll from "./modals/AddTestAll";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0"
  }
};

export default function Modal({ modal, classroomId }) {
  const dispatch = useDispatch();

  return (
    <ReactModal
      isOpen={modal.isModalOpen}
      contentLabel="Modal different Options"
      style={customStyles}
      onRequestClose={() => dispatch(toggleModalAction(classroomId))}
      overlayClassName="Overlay"
    >
      {modal.modalType === "delete" ? (
        <DeleteModal classroomId={classroomId} />
      ) : modal.modalType === "edit" ? (
        <EditModal classroomId={classroomId} />
      ) : modal.modalType === "info" ? (
        <TestInfo classroomId={classroomId} />
      ) : (
        <AddTestAll classroomId={classroomId} />
      )}
    </ReactModal>
  );
}
