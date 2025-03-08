import { createContext, useReducer } from "react";
import { studentReducer } from "../reducers/student";
export const StudentCtx = createContext();

const initState = {
  studentName: "",
  students: [],
  editMode: false,
  editableStudent: null,
};

const StudentProvider = (props) => {
  const { children } = props;

  const [studentStates, dispatch] = useReducer(studentReducer, initState);

  const changeNameHandler = (e) => {
    dispatch({ type: "change_student_name", payload: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (studentStates.studentName.trim() === "") {
      return alert("Please enter a valid student name");
    }
    const studentExists = studentStates.students.some(
      (student) => student.name === studentStates.studentName
    );
    if (studentExists) {
      return alert("Student Already Exists");
    }
    studentStates.editMode
      ? dispatch({ type: "update_student" })
      : dispatch({ type: "create_student" });
  };

  const makePresentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This Student is already in the ${
          student.isPresent === true ? "Present List" : "Absent List"
        }`
      );
    }
    dispatch({
      type: "change_isPresent_status_of_a_student",
      payload: { id: student.id, isPresent: true },
    });
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This Student is already in the ${
          student.isPresent === true ? "Present List" : "Absent List"
        }`
      );
    }
    dispatch({
      type: "change_isPresent_status_of_a_student",
      payload: { id: student.id, isPresent: false },
    });
  };

  const toggleList = (student) => {
    if (student.isPresent === undefined) {
      return alert("Please mark the attendance first");
    }
    dispatch({
      type: "change_isPresent_status_of_a_student",
      payload: { id: student.id, isPresent: !student.isPresent },
    });
  };

  const ctxValue = {
    studentStates,
    dispatch,
    changeNameHandler,
    submitHandler,
    makePresentHandler,
    makeAbsentHandler,
    toggleList,
  };

  return <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>;
};
export default StudentProvider;
