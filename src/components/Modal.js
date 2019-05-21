import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
    transform: "translate(-50%, -50%)"
  }
};

export default function Modal() {
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleModalAction());

  return (
    <ReactModal
      isOpen={modal.isModalOpen}
      contentLabel="Modal different Options"
      style={customStyles}
      onRequestClose={() => toggleModal()}
    >
      {modal.modalType === "delete" ? (
        <DeleteModal />
      ) : modal.modalType === "edit" ? (
        <EditModal />
      ) : modal.modalType === "info" ? (
        <TestInfo />
      ) : (
        <AddTestAll />
      )}
    </ReactModal>
  );
}
