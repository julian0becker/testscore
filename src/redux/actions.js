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

export const addTestAllAction = test => ({
  type: "ADD_TEST_ALL",
  payload: test
});

export const openAddTestAllModalAction = () => ({
  type: "OPEN_TEST_ALL_MODAL"
});

export const addSingleTestAction = (studentId, newTest) => ({
  type: "ADD_SINGLE_TEST",
  payload: studentId,
  newTest: newTest
});

export const deleteSingleTestAction = testId => ({
  type: "DELETE_SINGLE_TEST",
  payload: testId
});

export const openEditModalAction = (testId, studentId) => ({
  type: "OPEN_EDIT_MODAL",
  payload: testId,
  studentId: studentId
});

export const editTestAction = (updatedTest, testId) => ({
  type: "EDIT_TEST",
  payload: updatedTest,
  testId: testId
});

export const openInfoModalAction = (testId, studentId) => ({
  type: "OPEN_INFO_MODAL",
  payload: testId,
  studentId: studentId
});
