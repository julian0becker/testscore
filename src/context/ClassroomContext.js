import React from "react";
const ClassroomContext = React.createContext({
  classroomId: null,
  classroom: null,
  gradeSystem: null
});
export default ClassroomContext;
