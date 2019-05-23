import React from "react";
import Options from "./Options";
import Body from "./Body";
import Modal from "./Modal";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";

export default function Classroom(props) {
  const classroomId = props.match.params.id;

  const classroom = useSelector(state => {
    const classroom = state.classrooms.filter(
      classroom => classroom.id === classroomId
    );
    return classroom[0];
  });
  const modal = useSelector(state => {
    const classroom = state.classrooms.filter(
      classroom => classroom.id === classroomId
    );
    return classroom[0].modal;
  });

  return (
    <React.Fragment>
      <Header title={classroom.name} />
      <Options classroomId={classroomId} />
      <Body students={classroom.students} classroomId={classroomId} />
      <Modal modal={modal} classroomId={classroomId} />
      <Footer />
    </React.Fragment>
  );
}
