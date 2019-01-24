export function findIndexStudent(studentArray, idStudent) {
  return studentArray.findIndex(student => student.studentId === idStudent);
}

export function findIndexTest(studentArray, indexStudent, idTest) {
  return studentArray[indexStudent].results.findIndex(
    test => test.testId === idTest
  );
}
