import React from "react";
import { useDispatch } from "react-redux";
import { setDefaultSystemAction, toggleModalAction } from "../../redux/actions";

export default function SettingsModal(props) {
  const dispatch = useDispatch();
  const handleSwitchSystem = event => {
    event.preventDefault();
    props.switchSystem(event.target.system.value);
    dispatch(
      setDefaultSystemAction(event.target.system.value, props.classroomId)
    );
    dispatch(toggleModalAction(props.classroomId));
  };

  // styles
  const backgroundColor = { backgroundColor: "#1a1a1a" };

  return (
    <div style={backgroundColor}>
      <h5 className="text-white ml-2 mr-2 mb-0 p-3 ">
        Select a grading system
      </h5>
      <div className="d-flex justify-content-around w-100 p-3">
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
