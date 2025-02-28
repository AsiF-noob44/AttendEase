import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

function App() {
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  const [studentName, setStudentName] = useState("");
  return (
    <div className="App">
      <StudentForm
        students={students}
        setStudents={setStudents}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        studentName={studentName}
        setStudentName={setStudentName}
        editMode={editMode}
      />

      <StudentSection
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        setEditMode={setEditMode}
        setEditableStudent={setEditableStudent}
      />
    </div>
  );
}

export default App;
