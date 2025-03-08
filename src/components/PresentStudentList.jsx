import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const PresentStudentList = () => {
  const { studentStates, toggleList } = useContext(StudentCtx);
  const presentStudentList = studentStates.students.filter(
    (item) => item.isPresent === true
  );

  return (
    <div className="list present-students">
      <h2>Present Students</h2>
      <ul>
        {presentStudentList.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => toggleList(student)}>Swap Attendance</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PresentStudentList;
