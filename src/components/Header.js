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
      <Link to={"/"}>
        <i className="fas fa-chevron-left fa-2x title ml-4" />
      </Link>
      <h1 className="title d-flex justify-content-center mr-3">
        {classroom.name}
      </h1>
      <form onSubmit={event => handleSwitchSystem(event)}>
        <select name="system">
          <option value="uni">German Uni</option>
          <option value="american">American</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
