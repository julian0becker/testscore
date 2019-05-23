import uuid from "uuid";

const initialState = {
  classrooms: [
    {
      name: "DaF187",
      id: uuid.v4(),
      modal: {
        isModalOpen: false,
        forModalStudentId: null,
        forModalTestId: null,
        modalType: null
      },
      students: [
        {
          name: "Julian",
          tests: [
            {
              testName: "test1",
              maxPoints: 100,
              passMark: "50%",
              reachedPoints: 80,
              testId: uuid.v4(),
              grade: {
                decimal: 0.8,
                uni: "2,0",
                badgeColor: "#238823"
              }
            },
            {
              testName: "test2",
              maxPoints: 100,
              passMark: "50%",
              reachedPoints: 81,
              testId: uuid.v4(),
              grade: {
                decimal: 0.81,
                uni: "2,0",
                badgeColor: "#238823"
              }
            }
          ],
          studentId: uuid.v4()
        },
        {
          name: "Claudio",
          tests: [
            {
              testName: "test3",
              maxPoints: 100,
              passMark: "50%",
              reachedPoints: 82,
              testId: uuid.v4(),
              grade: {
                decimal: 0.82,
                uni: "2,0",
                badgeColor: "#238823"
              }
            },
            {
              testName: "test4",
              maxPoints: 100,
              passMark: "50%",
              reachedPoints: 83,
              testId: uuid.v4(),
              grade: {
                decimal: 0.83,
                uni: "2,0",
                badgeColor: "#238823"
              }
            }
          ],
          studentId: uuid.v4()
        }
      ]
    },
    {
      name: "DaF188",
      id: uuid.v4(),
      modal: {
        isModalOpen: false,
        forModalStudentId: null,
        forModalTestId: null,
        modalType: null
      },
      students: [
        {
          name: "Marcel",
          tests: [
            {
              testName: "test1",
              maxPoints: 100,
              passMark: "50%",
              reachedPoints: 80,
              testId: uuid.v4(),
              grade: {
                decimal: 0.8,
                uni: "2,0",
                badgeColor: "#238823"
              }
            },
            {
              testName: "test2",
              maxPoints: 100,
              passMark: "50%",
              reachedPoints: 81,
              testId: uuid.v4(),
              grade: {
                decimal: 0.81,
                uni: "2,0",
                badgeColor: "#238823"
              }
            }
          ],
          studentId: uuid.v4()
        },
        {
          name: "Michael",
          tests: [
            {
              testName: "test3",
              maxPoints: 100,
              passMark: "50%",
              reachedPoints: 82,
              testId: uuid.v4(),
              grade: {
                decimal: 0.82,
                uni: "2,0",
                badgeColor: "#238823"
              }
            },
            {
              testName: "test4",
              maxPoints: 100,
              passMark: "50%",
              reachedPoints: 83,
              testId: uuid.v4(),
              grade: {
                decimal: 0.83,
                uni: "2,0",
                badgeColor: "#238823"
              }
            }
          ],
          studentId: uuid.v4()
        }
      ]
    }
  ]
};

function studentReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        classrooms: state.classrooms.map(classroom => {
          if (classroom.id === action.classroomId) {
            return {
              ...classroom,
              students: [...classroom.students, action.payload]
            };
          } else {
            return { ...classroom };
          }
        })
      };
    case "DELETE_STUDENT":
      return {
        ...state,
        classrooms: state.classrooms.map(classroom => {
          if (classroom.id === action.classroomId) {
            return {
              ...classroom,
              students: classroom.students.filter(
                student => student.studentId !== action.studentId
              )
            };
          } else {
            return { ...classroom };
          }
        })
      };
    case "TOGGLE_DELETE_MODAL":
      return {
        ...state,
        classrooms: state.classrooms.map(classroom => {
          if (classroom.id === action.classroomId) {
            return {
              ...classroom,
              modal: {
                ...classroom.modal,
                isModalOpen: !classroom.modal.isModalOpen,
                forModalStudentId: action.studentId,
                modalType: "delete"
              }
            };
          } else {
            return { ...classroom };
          }
        })
      };
    case "ADD_TEST_ALL":
      return {
        ...state,
        classrooms: state.classrooms.map(classroom => {
          if (classroom.id === action.classroomId) {
            return {
              ...classroom,
              students: classroom.students.map(student => ({
                ...student,
                tests: [...student.tests, action.test].map(test => {
                  return { ...test, testId: uuid.v4() };
                })
              }))
            };
          } else {
            return { ...classroom };
          }
        })
      };
    case "OPEN_TEST_ALL_MODAL":
      return {
        ...state,
        classrooms: state.classrooms.map(classroom => {
          if (classroom.id === action.classroomId) {
            return {
              ...classroom,
              modal: {
                ...classroom.modal,
                isModalOpen: true,
                modalType: "newTestAll"
              }
            };
          } else {
            return { ...classroom };
          }
        })
      };
    case "OPEN_EDIT_MODAL":
      return {
        ...state,
        classrooms: state.classrooms.map(classroom => {
          if (classroom.id === action.classroomId) {
            return {
              ...classroom,
              modal: {
                ...classroom.modal,
                isModalOpen: true,
                forModalTestId: action.testId,
                forModalStudentId: action.studentId,
                modalType: "edit"
              }
            };
          } else {
            return { ...classroom };
          }
        })
      };
    case "OPEN_INFO_MODAL":
      return {
        ...state,
        classrooms: state.classrooms.map(classroom => {
          if (classroom.id === action.classroomId) {
            return {
              ...classroom,
              modal: {
                ...classroom.modal,
                isModalOpen: true,
                forModalTestId: action.testId,
                forModalStudentId: action.studentId,
                modalType: "info"
              }
            };
          } else {
            return { ...classroom };
          }
        })
      };

    case "ADD_SINGLE_TEST":
      return {
        ...state,
        classrooms: state.classrooms.map(classroom => {
          if (classroom.id === action.classroomId) {
            return {
              ...classroom,
              students: classroom.students.map(student => {
                if (student.studentId === action.studentId) {
                  return {
                    ...student,
                    tests: [...student.tests, action.newTest]
                  };
                } else {
                  return { ...student };
                }
              })
            };
          } else {
            return { ...classroom };
          }
        })
      };
    case "DELETE_SINGLE_TEST":
      return {
        ...state,
        classrooms: state.classrooms.map(classroom => {
          if (classroom.id === action.classroomId) {
            return {
              ...classroom,
              students: classroom.students.map(student => {
                if (student.tests.some(test => test.testId === action.testId)) {
                  return {
                    ...student,
                    tests: student.tests.filter(
                      test => test.testId !== action.testId
                    )
                  };
                } else {
                  return { ...student };
                }
              })
            };
          } else {
            return { ...classroom };
          }
        })
      };

    case "EDIT_TEST":
      return {
        ...state,
        classrooms: state.classrooms.map(classroom => {
          if (classroom.id === action.classroomId) {
            return {
              ...classroom,
              students: classroom.students.map(student => {
                return {
                  ...student,
                  tests: student.tests.map(test => {
                    if (test.testId === action.testId) {
                      return action.updatedTest;
                    } else {
                      return { ...test };
                    }
                  })
                };
              })
            };
          } else {
            return { ...classroom };
          }
        })
      };
    case "ADD_CLASSROOM":
      return {
        ...state,
        classrooms: [...state.classrooms, action.newClassroom]
      };

    case "DELETE_CLASSROOM":
      return {
        ...state,
        classrooms: state.classrooms.filter(
          classroom => classroom.id !== action.classroomId
        )
      };

    default:
      return { ...state };
  }
}

export default studentReducer;
