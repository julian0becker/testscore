export const addStudentAction = (student, classroomId) => ({
  type: "ADD_STUDENT",
  payload: student,
  classroomId
});

export const deleteStudentAction = (studentId, classroomId) => ({
  type: "DELETE_STUDENT",
  studentId: studentId,
  classroomId: classroomId
});

export const toggleModalAction = (classroomId, studentId) => ({
  type: "TOGGLE_DELETE_MODAL",
  classroomId: classroomId,
  studentId: studentId
});

export const addTestAllAction = (test, classroomId) => ({
  type: "ADD_TEST_ALL",
  test: test,
  classroomId: classroomId
});

export const openAddTestAllModalAction = classroomId => ({
  type: "OPEN_TEST_ALL_MODAL",
  classroomId: classroomId
});

export const addSingleTestAction = (studentId, newTest, classroomId) => ({
  type: "ADD_SINGLE_TEST",
  studentId: studentId,
  newTest: newTest,
  classroomId: classroomId
});

export const deleteSingleTestAction = (testId, classroomId) => ({
  type: "DELETE_SINGLE_TEST",
  testId: testId,
  classroomId: classroomId
});

export const openEditModalAction = (testId, studentId, classroomId) => ({
  type: "OPEN_EDIT_MODAL",
  testId: testId,
  studentId: studentId,
  classroomId: classroomId
});

export const editTestAction = (updatedTest, testId, classroomId) => ({
  type: "EDIT_TEST",
  updatedTest: updatedTest,
  testId: testId,
  classroomId: classroomId
});

export const openInfoModalAction = (testId, studentId, classroomId) => ({
  type: "OPEN_INFO_MODAL",
  testId: testId,
  studentId: studentId,
  classroomId: classroomId
});
