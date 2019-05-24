import React, { useContext } from "react";
import Student from "./Student";
import { ClassroomContext } from "./Classrooms";

export default function Body() {
  const { classroom } = useContext(ClassroomContext);
  return (
    <div className="classroom d-flex flex-wrap justify-content-center">
      {classroom.students.map(student => (
        <Student key={student.studentId} student={student} />
      ))}
    </div>
  );
}
