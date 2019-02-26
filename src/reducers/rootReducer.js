import uuid from "uuid";

const initState = {
  students: [
    {
      name: "Julian",
      results: [
        {
          testName: "Redux 1",
          maxPoints: 100,
          passMark: "50%",
          reachedPoints: 80,
          grade: 0.8,
          gradeUniStyle: "2,0",
          testId: uuid.v4(),
          badgeStyle: "#238823",
          isEditingPoints: null
        },
        {
          testName: "test 2",
          maxPoints: 100,
          passMark: "60%",
          reachedPoints: 95,
          grade: 0.95,
          gradeUniStyle: "1,3",
          testId: uuid.v4(),
          badgeStyle: "#20B2AA",
          isEditingPoints: null
        }
      ],
      studentId: uuid.v4()
    },
    {
      name: "Claudio",
      results: [
        {
          testName: "JavaScript",
          maxPoints: 100,
          passMark: "50%",
          reachedPoints: 80,
          grade: 0.8,
          gradeUniStyle: "2,0",
          testId: uuid.v4(),
          badgeStyle: "#238823",
          isEditingPoints: null
        },
        {
          testName: "Redux.js",
          maxPoints: 100,
          passMark: "50%",
          reachedPoints: 79,
          grade: 0.79,
          gradeUniStyle: "2,3",
          testId: uuid.v4(),
          badgeStyle: "#238823",
          isEditingPoints: null
        }
      ],
      studentId: uuid.v4()
    }
  ],
  isModalOn: null,
  typeOfModal: null,
  forModalTestId: null,
  forModalStudentId: null,
  forModalMessage: null
};

const rootReducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_STUDENT": {
      return { ...state, students: [...state.students.concat(action.student)] };
    }
    case "OPEN_MODAL_ALERT_ENTER_NAME": {
      return {
        ...state,
        isModalOn: true,
        typeOfModal: "alert",
        forModalMessage: "Enter a name."
      };
    }
    case "OPEN_MODAL_TEST_FOR_ALL": {
      return {
        ...state,
        isModalOn: true,
        typeOfModal: "addTestAll"
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        isModalOn: false
      };
    }
    case "ADD_TEST_ALL": {
      return {
        ...state,
        students: state.students.map(student =>
          student.results.concat(action.test)
        ),
        isModalOn: false
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
