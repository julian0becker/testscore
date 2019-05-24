import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import ReactModal from "react-modal";
import { toggleModalAction } from "../redux/actions";
import TestInfo from "./modals/TestInfo";
import DeleteModal from "./modals/DeleteStudent";
import EditModal from "./modals/EditTest";
import AddTestAll from "./modals/AddTestAll";
import { ClassroomContext } from "./Classrooms";

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

export default function Modal() {
  const dispatch = useDispatch();
  const { classroomId, classroom } = useContext(ClassroomContext);

  return (
    <ReactModal
      isOpen={classroom.modal.isModalOpen}
      contentLabel="Modal different Options"
      style={customStyles}
      onRequestClose={() => dispatch(toggleModalAction(classroomId))}
      overlayClassName="Overlay"
    >
      {classroom.modal.modalType === "delete" ? (
        <DeleteModal classroomId={classroomId} />
      ) : classroom.modal.modalType === "edit" ? (
        <EditModal classroomId={classroomId} />
      ) : classroom.modal.modalType === "info" ? (
        <TestInfo classroomId={classroomId} />
      ) : (
        <AddTestAll classroomId={classroomId} />
      )}
    </ReactModal>
  );
}
