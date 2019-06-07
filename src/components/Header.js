import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ClassroomContext from "../context/ClassroomContext";

export default function Header() {
  const { classroom } = useContext(ClassroomContext);
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link to={"/"}>
        <i className="fas fa-chevron-left fa-2x title ml-4" />
      </Link>
      <h1 className="title d-flex justify-content-center mr-3">
        {classroom.name}
      </h1>
      <div />
    </div>
  );
}
