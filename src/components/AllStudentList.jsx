import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const AllStudentList = () => {
  const { studentStates, dispatch, makePresentHandler, makeAbsentHandler } =
    useContext(StudentCtx);

  return (
    <div className="list all-students">
      <h2>All Students</h2>
      <ul>
        {studentStates.students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button
              onClick={() =>
                dispatch({ type: "edit_student", payload: student })
              }
            >
              Edit
            </button>
            <button
              onClick={() =>
                dispatch({ type: "remove_student", payload: student.id })
              }
            >
              Delete
            </button>
            <button onClick={() => makePresentHandler(student)}>Present</button>
            <button onClick={() => makeAbsentHandler(student)}>Absent</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AllStudentList;
