export const addStudentAction = student => ({
  type: "ADD_STUDENT",
  payload: student
});

export const deleteStudentAction = studentId => ({
  type: "DELETE_STUDENT",
  payload: studentId
});

export const toggleModalAction = studentId => ({
  type: "TOGGLE_DELETE_MODAL",
  payload: studentId
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