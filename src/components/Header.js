import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDefaultSystemAction } from "../redux/actions";
import ClassroomContext from "../context/ClassroomContext";

export default function Header() {
  const { classroomId, classroom, switchSystem } = useContext(ClassroomContext);
  const dispatch = useDispatch();

  const handleSwitchSystem = event => {
    event.preventDefault();
    switchSystem(event.target.system.value);
    dispatch(setDefaultSystemAction(event.target.system.value, classroomId));
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="header-item justify-content-start">
        <Link to={"/"}>
          <i className="fas fa-chevron-left fa-2x title pl-3" />
        </Link>
      </div>
      <div className="header-item justify-content-center">
        <h1 className="title d-flex justify-content-center">
          {classroom.name}
        </h1>
      </div>
      <div className="header-item justify-content-end pt-1">
        <form
          className="form-group pr-3"
          onSubmit={event => handleSwitchSystem(event)}
        >
          <select className="custom-select-sm bg-light" name="system">
            <option value="uni">German Uni</option>
            <option value="american">American</option>
          </select>
          <input className="btn btn-primary btn-sm" type="submit" />
        </form>
      </div>
    </div>
  );
}
