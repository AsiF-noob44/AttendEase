import { createContext, useState } from "react";

export const StudentCtx = createContext();

const StudentProvider = (props) => {
  const { children } = props;
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  const [studentName, setStudentName] = useState("");

  const changeNameHandler = (e) => {
    setStudentName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (studentName.trim() === "") {
      return alert("Please enter a valid student name");
    }
    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const newStudent = {
      id: new Date().getTime(),
      name: studentName,
      isPresent: undefined,
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };

  const updateHandler = () => {
    const updatedStudentList = students.map((item) => {
      if (item.id === editableStudent.id) {
        return { ...item, name: studentName };
      }
      return item;
    });

    setStudents(updatedStudentList);
    setStudentName("");
    setEditMode(false);
    setEditableStudent(null);
  };
  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditableStudent(student);
  };

  const removeHandler = (studentId) => {
    const updatedStudentList = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudentList);
  };

  const makePresentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This Student is already in the ${
          student.isPresent === true ? "Present List" : "Absent List"
        }`
      );
    }
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: true };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This Student is already in the ${
          student.isPresent === true ? "Present List" : "Absent List"
        }`
      );
    }
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: false };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  const toggleList = (student) => {
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !item.isPresent };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  const ctxValue = {
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    studentName,
    setStudentName,
    changeNameHandler,
    submitHandler,
    createHandler,
    updateHandler,
    editHandler,
    removeHandler,
    makePresentHandler,
    makeAbsentHandler,
    toggleList,
  };

  return <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>;
};
export default StudentProvider;
