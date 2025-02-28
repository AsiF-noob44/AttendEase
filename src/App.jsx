import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  //Derived States
  const presentStudentList = students.filter((item) => item.isPresent === true);
  const absentStudentList = students.filter((item) => item.isPresent === false);

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

  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditableStudent(student);
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

  const removeHandler = (studentId) => {
    const updatedStudentList = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudentList);
  };

  const changeNameHandler = (e) => {
    setStudentName(e.target.value);
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

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={studentName} onChange={changeNameHandler} />
        <button type="submit">
          {editMode ? "Update Student" : "Add Student"}
        </button>
      </form>

      <div className="student-section">
        <div className="list all-students">
          <h2>All Students</h2>
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                <span>{student.name}</span>
                <button onClick={() => editHandler(student)}>Edit</button>
                <button onClick={() => removeHandler(student.id)}>
                  Delete
                </button>
                <button onClick={() => makePresentHandler(student)}>
                  Present
                </button>
                <button onClick={() => makeAbsentHandler(student)}>
                  Absent
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list present-students">
          <h2>Present Students</h2>
          <ul>
            {presentStudentList.map((student) => (
              <li key={student.id}>
                <span>{student.name}</span>
                <button onClick={() => toggleList(student)}>
                  Swap Attendance
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list absent-students">
          <h2>Absent Students</h2>
          <ul>
            {absentStudentList.map((student) => (
              <li key={student.id}>
                <span>{student.name}</span>
                <button onClick={() => toggleList(student)}>
                  Swap Attendance
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
