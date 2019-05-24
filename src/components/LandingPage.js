import React, { useState } from "react";
import ReactModal from "react-modal";
import Footer from "./Footer";
import EditClassroom from "./modals/EditClassroom";
import LandingPageBody from "./LandingPageBody";

const customModalStyles = {
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

export default function LandingPage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [classroomId, setClassroomId] = useState(null);

  return (
    <div>
      <h1 className="title">Testify</h1>
      <LandingPageBody
        setClassroomId={setClassroomId}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <Footer />
      <ReactModal
        isOpen={isEditModalOpen}
        contentLabel="Modal different Options"
        style={customModalStyles}
        onRequestClose={() => setIsEditModalOpen(!isEditModalOpen)}
        overlayClassName="Overlay"
      >
        <EditClassroom
          setIsEditModalOpen={setIsEditModalOpen}
          classroomId={classroomId}
        />
      </ReactModal>
    </div>
  );
}
