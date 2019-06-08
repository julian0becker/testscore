export const calculateGrade = (decimal, passMark) => {
  const x = decimal;

  if (passMark === "50%") {
    switch (true) {
      case x < 0.5:
        return { uni: "5,0", badgeColor: "#D2222D" };
      case x < 0.55:
        return { uni: "4,0", badgeColor: "#EEB462" };
      case x < 0.6:
        return { uni: "3,7", badgeColor: "#EEB462" };
      case x < 0.65:
        return { uni: "3,3", badgeColor: "#FFBF00" };
      case x < 0.7:
        return { uni: "3,0", badgeColor: "#FFBF00" };
      case x < 0.75:
        return { uni: "2,7", badgeColor: "#FFBF00" };
      case x < 0.8:
        return { uni: "2,3", badgeColor: "#238823" };
      case x < 0.85:
        return { uni: "2,0", badgeColor: "#238823" };
      case x < 0.9:
        return { uni: "1,7", badgeColor: "#238823" };
      case x < 0.95:
        return { uni: "1,3", badgeColor: "#20B2AA" };
      case x <= 1:
        return { uni: "1,0", badgeColor: "#20B2AA" };
      default:
    }
  } else {
    switch (true) {
      case x < 0.6:
        return { uni: "5,0", badgeColor: "#D2222D" };
      case x < 0.64:
        return { uni: "4,0", badgeColor: "#EEB462" };
      case x < 0.68:
        return { uni: "3,7", badgeColor: "#EEB462" };
      case x < 0.72:
        return { uni: "3,3", badgeColor: "#FFBF00" };
      case x < 0.76:
        return { uni: "3,0", badgeColor: "#FFBF00" };
      case x < 0.8:
        return { uni: "2,7", badgeColor: "#FFBF00" };
      case x < 0.84:
        return { uni: "2,3", badgeColor: "#238823" };
      case x < 0.88:
        return { uni: "2,0", badgeColor: "#238823" };
      case x < 0.92:
        return { uni: "1,7", badgeColor: "#238823" };
      case x < 0.96:
        return { uni: "1,3", badgeColor: "#20B2AA" };
      case x <= 1:
        return { uni: "1,0", badgeColor: "#20B2AA" };
      default:
        break;
    }
  }
};

export const findIndexStudent = (studentArray, idStudent) => {
  return studentArray.findIndex(student => student.studentId === idStudent);
};

export const findIndexTest = (studentArray, indexStudent, idTest) => {
  return studentArray[indexStudent].tests.findIndex(
    test => test.testId === idTest
  );
};

export const displayAverageUniversityGrade = averageUniversityGrade => {
  const x = averageUniversityGrade;

  switch (true) {
    case x <= 1.15:
      return { uni: "1,0", badgeColor: "#20B2AA" };
    case x <= 1.5:
      return { uni: "1,3", badgeColor: "#20B2AA" };
    case x <= 1.85:
      return { uni: "1,7", badgeColor: "#238823" };
    case x <= 2.15:
      return { uni: "2,0", badgeColor: "#238823" };
    case x <= 2.5:
      return { uni: "2,3", badgeColor: "#238823" };
    case x <= 2.85:
      return { uni: "2,7", badgeColor: "#FFBF00" };
    case x <= 3.15:
      return { uni: "3,0", badgeColor: "#FFBF00" };
    case x <= 3.5:
      return { uni: "3,3", badgeColor: "#FFBF00" };
    case x <= 3.85:
      return { uni: "3,7", badgeColor: "#EEB462" };
    case x <= 4.0:
      return { uni: "4,0", badgeColor: "#EEB462" };
    case x > 4.0:
      return { uni: "5,0", badgeColor: "#D2222D" };
    default:
      break;
  }
};

export const calculateAmericanGrade = decimal => {
  const x = decimal;

  switch (true) {
    case x < 0.7:
      return { american: "F", badgeColor: "#D2222D" };
    case x < 0.74:
      return { american: "D", badgeColor: "#EEB462" };
    case x < 0.8:
      return { american: "C", badgeColor: "#FFBF00" };
    case x < 0.9:
      return { american: "B", badgeColor: "#238823" };
    case x <= 1:
      return { american: "A", badgeColor: "#20B2AA" };
    default:
  }
};

export const getAverageGrade = student => {
  const validTests = student.tests.filter(
    test => test.grade.decimal !== "Please Edit"
  );

  let accumulatedUniGrade = 0;
  for (let test of validTests) {
    accumulatedUniGrade += parseFloat(test.grade.uni.replace(",", "."));
  }
  const averageUniGrade = accumulatedUniGrade / validTests.length;
  return displayAverageUniversityGrade(averageUniGrade);
};

export const getAverageAmericanGrade = student => {
  const validTests = student.tests.filter(
    test => test.grade.decimal !== "Please Edit"
  );
  let accumulatedDecimal = 0;
  for (let test of validTests) {
    accumulatedDecimal += test.grade.decimal;
  }
  const averageDecimal = accumulatedDecimal / validTests.length;
  return calculateAmericanGrade(averageDecimal);
};
