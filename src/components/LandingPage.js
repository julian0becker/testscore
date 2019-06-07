import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
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
      <div className="d-flex justify-content-between align-items-center">
        <div />
        <h1 className="title ml-5">Testify</h1>
        <Link to={"/about"}>
          <div className="mr-5">About</div>
        </Link>
      </div>

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
