import React from "react";

import Student from "./Student";

export default function Body({ students, classroomId }) {
  return (
    <div className="classroom d-flex flex-wrap justify-content-center">
      {students.map(student => (
        <Student
          key={student.studentId}
          student={student}
          classroomId={classroomId}
        />
      ))}
    </div>
  );
}
