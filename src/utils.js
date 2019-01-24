export function findIndexStudent(studentArray, idStudent) {
  return studentArray.findIndex(student => student.studentId === idStudent);
}

export function findIndexTest(studentArray, indexStudent, idTest) {
  return studentArray[indexStudent].results.findIndex(
    test => test.testId === idTest
  );
}

export function calculateGrade(
  grade,
  passMark,
  indexStudent,
  indexTest,
  students
) {
  const x = grade;
  console.log(passMark);

  if (passMark === "50%") {
    switch (true) {
      case x < 0.5:
        students[indexStudent].results[indexTest].gradeUniStyle = "5,0";
        students[indexStudent].results[indexTest].badgeStyle = "#D2222D";
        this.setState({ students: students });
        break;
      case x < 0.55:
        students[indexStudent].results[indexTest].gradeUniStyle = "4,0";
        students[indexStudent].results[indexTest].badgeStyle = "#EEB462";
        this.setState({ students: students });
        break;
      case x < 0.6:
        students[indexStudent].results[indexTest].gradeUniStyle = "3,7";
        students[indexStudent].results[indexTest].badgeStyle = "#EEB462";
        this.setState({ students: students });
        break;
      case x < 0.65:
        students[indexStudent].results[indexTest].gradeUniStyle = "3,3";
        students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
        this.setState({ students: students });
        break;
      case x < 0.7:
        students[indexStudent].results[indexTest].gradeUniStyle = "3,0";
        students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
        this.setState({ students: students });
        break;
      case x < 0.75:
        students[indexStudent].results[indexTest].gradeUniStyle = "2,7";
        students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
        this.setState({ students: students });
        break;
      case x < 0.8:
        students[indexStudent].results[indexTest].gradeUniStyle = "2,3";
        students[indexStudent].results[indexTest].badgeStyle = "#238823";
        this.setState({ students: students });
        break;
      case x < 0.85:
        students[indexStudent].results[indexTest].gradeUniStyle = "2,0";
        students[indexStudent].results[indexTest].badgeStyle = "#238823";
        this.setState({ students: students });
        break;
      case x < 0.9:
        students[indexStudent].results[indexTest].gradeUniStyle = "1,7";
        students[indexStudent].results[indexTest].badgeStyle = "#238823";
        this.setState({ students: students });
        break;
      case x < 0.95:
        students[indexStudent].results[indexTest].gradeUniStyle = "1,3";
        students[indexStudent].results[indexTest].badgeStyle = "#20B2AA";
        this.setState({ students: students });
        break;
      case x <= 1:
        students[indexStudent].results[indexTest].gradeUniStyle = "1,0";
        students[indexStudent].results[indexTest].badgeStyle = "#20B2AA";
        this.setState({ students: students });
        break;
      default:
        break;
    }
  } else {
    switch (true) {
      case x < 0.5:
        students[indexStudent].results[indexTest].gradeUniStyle = "5,0";
        students[indexStudent].results[indexTest].badgeStyle = "#D2222D";
        this.setState({ students: students });
        break;
      case x < 0.55:
        students[indexStudent].results[indexTest].gradeUniStyle = "4,0";
        students[indexStudent].results[indexTest].badgeStyle = "#EEB462";
        this.setState({ students: students });
        break;
      case x < 0.6:
        students[indexStudent].results[indexTest].gradeUniStyle = "3,7";
        students[indexStudent].results[indexTest].badgeStyle = "#EEB462";
        this.setState({ students: students });
        break;
      case x < 0.65:
        students[indexStudent].results[indexTest].gradeUniStyle = "3,3";
        students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
        this.setState({ students: students });
        break;
      case x < 0.7:
        students[indexStudent].results[indexTest].gradeUniStyle = "3,0";
        students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
        this.setState({ students: students });
        break;
      case x < 0.75:
        students[indexStudent].results[indexTest].gradeUniStyle = "2,7";
        students[indexStudent].results[indexTest].badgeStyle = "#FFBF00";
        this.setState({ students: students });
        break;
      case x < 0.8:
        students[indexStudent].results[indexTest].gradeUniStyle = "2,3";
        students[indexStudent].results[indexTest].badgeStyle = "#238823";
        this.setState({ students: students });
        break;
      case x < 0.85:
        students[indexStudent].results[indexTest].gradeUniStyle = "2,0";
        students[indexStudent].results[indexTest].badgeStyle = "#238823";
        this.setState({ students: students });
        break;
      case x < 0.9:
        students[indexStudent].results[indexTest].gradeUniStyle = "1,7";
        students[indexStudent].results[indexTest].badgeStyle = "#238823";
        this.setState({ students: students });
        break;
      case x < 0.95:
        students[indexStudent].results[indexTest].gradeUniStyle = "1,3";
        students[indexStudent].results[indexTest].badgeStyle = "#20B2AA";
        this.setState({ students: students });
        break;
      case x <= 1:
        students[indexStudent].results[indexTest].gradeUniStyle = "1,0";
        students[indexStudent].results[indexTest].badgeStyle = "#20B2AA";
        this.setState({ students: students });
        break;
      default:
        break;
    }
  }
}
