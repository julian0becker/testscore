import React, { useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Student from "./Student";
import ClassroomContext from "../context/ClassroomContext";

export default function Body() {
  const { classroom } = useContext(ClassroomContext);
  const onDragEnd = result => {
    const { source, destination } = result;

    const removed = classroom.students.splice(source.index, 1);
    classroom.students.splice(destination.index, 0, ...removed);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="classroom d-flex flex-wrap justify-content-center">
        <Droppable droppableId={classroom.id} direction="horizontal">
          {provided => (
            <div
              className="d-flex"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {classroom.students.map((student, index) => (
                <Student
                  key={student.studentId}
                  student={student}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
