import uuid from "uuid";

const initialState = {
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
  ],
  modal: {
    isModalOpen: false,
    forModalStudentId: null,
    forModalTestId: null,
    modalType: null
  }
};

function studentReducer(
  state = initialState,
  { type, payload, newTest, studentId, testId }
) {
  switch (type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: [...state.students, payload]
      };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          student => student.studentId !== payload
        )
      };
    case "TOGGLE_DELETE_MODAL":
      return {
        ...state,
        modal: {
          ...state.modal,
          isModalOpen: !state.modal.isModalOpen,
          forModalStudentId: payload,
          modalType: "delete"
        }
      };
    case "ADD_TEST_ALL":
      return {
        ...state,
        students: state.students.map(student => ({
          ...student,
          tests: [...student.tests, payload].map(test => {
            return { ...test, testId: uuid.v4() };
          })
        }))
      };
    case "OPEN_TEST_ALL_MODAL":
      return {
        ...state,
        modal: { ...state.modal, isModalOpen: true, modalType: "newTestAll" }
      };
    case "OPEN_EDIT_MODAL":
      return {
        ...state,
        modal: {
          ...state.modal,
          isModalOpen: true,
          forModalTestId: payload,
          forModalStudentId: studentId,
          modalType: "edit"
        }
      };
    case "OPEN_INFO_MODAL":
      return {
        ...state,
        modal: {
          ...state.modal,
          isModalOpen: true,
          forModalTestId: payload,
          forModalStudentId: studentId,
          modalType: "info"
        }
      };
    case "ADD_SINGLE_TEST":
      return {
        ...state,
        students: state.students.map(student => {
          if (student.studentId === payload) {
            return { ...student, tests: [...student.tests, newTest] };
          } else {
            return { ...student };
          }
        })
      };
    case "DELETE_SINGLE_TEST":
      return {
        ...state,
        students: state.students.map(student => {
          if (student.tests.some(test => test.testId === payload)) {
            return {
              ...student,
              tests: student.tests.filter(test => test.testId !== payload)
            };
          } else {
            return { ...student };
          }
        })
      };
    case "EDIT_TEST":
      return {
        ...state,
        students: state.students.map(student => {
          return {
            ...student,
            tests: student.tests.map(test => {
              if (test.testId === testId) {
                return payload;
              } else {
                return { ...test };
              }
            })
          };
        })
      };
    default:
      return { ...state };
  }
}

export default studentReducer;
