export const addStudentAction = (student, classroomId) => ({
  type: "ADD_STUDENT",
  student,
  classroomId
});

export const deleteStudentAction = (studentId, classroomId) => ({
  type: "DELETE_STUDENT",
  studentId,
  classroomId
});

export const toggleModalAction = (classroomId, studentId) => ({
  type: "TOGGLE_DELETE_MODAL",
  classroomId,
  studentId
});

export const addTestAllAction = (test, classroomId) => ({
  type: "ADD_TEST_ALL",
  test,
  classroomId
});

export const openAddTestAllModalAction = classroomId => ({
  type: "OPEN_TEST_ALL_MODAL",
  classroomId
});

export const addSingleTestAction = (studentId, newTest, classroomId) => ({
  type: "ADD_SINGLE_TEST",
  studentId,
  newTest,
  classroomId
});

export const deleteSingleTestAction = (testId, classroomId) => ({
  type: "DELETE_SINGLE_TEST",
  testId,
  classroomId
});

export const openEditModalAction = (testId, studentId, classroomId) => ({
  type: "OPEN_EDIT_MODAL",
  testId,
  studentId,
  classroomId
});

export const editTestAction = (updatedTest, testId, classroomId) => ({
  type: "EDIT_TEST",
  updatedTest,
  testId,
  classroomId
});

export const openInfoModalAction = (testId, studentId, classroomId) => ({
  type: "OPEN_INFO_MODAL",
  testId,
  studentId,
  classroomId
});

export const addClassroomAction = newClassroom => ({
  type: "ADD_CLASSROOM",
  newClassroom
});

export const deleteClassroomAction = classroomId => ({
  type: "DELETE_CLASSROOM",
  classroomId
});

export const editClassroomNameAction = (newName, classroomId) => ({
  type: "EDIT_CLASSROOM_NAME",
  newName,
  classroomId
});

export const openQuickEditAction = (classroomId, studentId, testId, jsx) => ({
  type: "OPEN_QUICK_EDIT",
  classroomId,
  studentId,
  testId,
  jsx
});

export const quickEditAction = (points, grade, decimal) => ({
  type: "QUICK_EDIT",
  points,
  grade,
  decimal
});

export const setDefaultSystemAction = (system, classroomId) => ({
  type: "SET_DEFAULT_SYSTEM",
  system,
  classroomId
});

export const openSettingsModalAction = classroomId => ({
  type: "OPEN_SETTINGS_MODAL",
  classroomId
});
