import React from "react";
import { useSelector } from "react-redux";
import Student from "./Student";

export default function Classroom() {
  const students = useSelector(state => state.students);

  return (
    <div className="classroom d-flex flex-wrap justify-content-center">
      {students.map(student => (
        <Student key={student.studentId} student={student} />
      ))}
    </div>
  );
}
