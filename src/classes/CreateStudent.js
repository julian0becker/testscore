import uuid from "uuid";

class CreateStudent {
  constructor(name = "Edit Name", results = []) {
    this.name = name;
    this.results = results;
    this.studentId = uuid.v4();
  }
}

export default CreateStudent;
