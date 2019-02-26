import uuid from "uuid";

class CreateTestAll {
  constructor(testName, maxPoints, passMark) {
    this.testName = testName;
    this.maxPoints = maxPoints;
    this.passMark = passMark;
    this.reachedPoints = "Please Edit";
    this.grade = null;
    this.gradeUniStyle = "edit";
    this.testId = uuid.v4();
    this.badgeStyle = null;
    this.isEditingPoints = null;
  }
}

export default CreateTestAll;
