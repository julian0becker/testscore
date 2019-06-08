import React, { useState } from "react";
import Options from "./Options";
import Body from "./Body";
import Modal from "./Modal";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";
import ClassroomContext from "../context/ClassroomContext";

export default function Classroom(props) {
  const classroomIdContext = props.match.params.id;

  const classroomContext = useSelector(state => {
    const classroom = state.classrooms.filter(
      classroom => classroom.id === classroomIdContext
    );
    return classroom[0];
  });

  const [system, setSystem] = useState(classroomContext.defaultSystem);
  const switchSystem = selectedSystem => {
    setSystem(selectedSystem);
  };

  const value = {
    classroomId: classroomIdContext,
    classroom: classroomContext,
    gradeSystem: system,
    switchSystem: switchSystem
  };

  return (
    <ClassroomContext.Provider value={value}>
      <React.Fragment>
        <Header />
        <Options />
        <Body />
        <Modal />
        <Footer />
      </React.Fragment>
    </ClassroomContext.Provider>
  );
}
