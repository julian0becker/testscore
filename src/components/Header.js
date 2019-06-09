import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSettingsModalAction } from "../redux/actions";
import ClassroomContext from "../context/ClassroomContext";

export default function Header() {
  const { classroomId, classroom } = useContext(ClassroomContext);
  const dispatch = useDispatch();

  return (
    <div className="header-container">
      <div className="header-item  justify-content-start">
        <Link to={"/"}>
          <i className="fas fa-chevron-left fa-2x title pl-3" />
        </Link>
      </div>
      <div className="header-item justify-content-center">
        <h1 className="title d-flex justify-content-center">
          {classroom.name}
        </h1>
      </div>
      <div className="header-item justify-content-end pt-1 pr-2">
        <i
          onClick={() => dispatch(openSettingsModalAction(classroomId))}
          className="fas fa-2x fa-cog settings-cog"
        />
      </div>
    </div>
  );
}
