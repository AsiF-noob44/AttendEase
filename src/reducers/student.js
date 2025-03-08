export const studentReducer = (state, action) => {
  switch (action.type) {
    case "change_student_name": {
      return { ...state, studentName: action.payload };
    }
    case "create_student": {
      const newStudent = {
        id: new Date().getTime(),
        name: state.studentName,
        isPresent: undefined,
      };
      return {
        ...state,
        students: [...state.students, newStudent],
        studentName: "",
      };
    }
    case "edit_student": {
      return {
        ...state,
        editMode: true,
        editableStudent: action.payload,
        studentName: action.payload.name,
      };
    }
    case "update_student": {
      return {
        ...state,
        editMode: false,
        editableStudent: null,
        students: state.students.map((item) => {
          if (item.id === state.editableStudent.id) {
            return { ...item, name: state.studentName };
          }
          return item;
        }),
        studentName: "",
      };
    }
    case "remove_student": {
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    case "change_isPresent_status_of_a_student": {
      return {
        ...state,
        students: state.students.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, isPresent: action.payload.isPresent };
          }
          return item;
        }),
      };
    }
    default:
      return state;
  }
};
