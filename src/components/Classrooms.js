import React from "react";
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

  const value = {
    classroomId: classroomIdContext,
    classroom: classroomContext
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
