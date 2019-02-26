export function handleAddStudent(studentData) {
  return {
    type: "ADD_STUDENT",
    student: studentData
  };
}

export function handleEnterName() {
  return {
    type: "OPEN_MODAL_ALERT_ENTER_NAME"
  };
}

export function handleOpenAddTestAllModal() {
  return {
    type: "OPEN_MODAL_TEST_FOR_ALL"
  };
}
