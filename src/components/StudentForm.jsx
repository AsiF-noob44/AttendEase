import { useContext } from "react";
import { StudentCtx } from "../contexts/Student"; // Updated import

const StudentForm = () => {
  const { studentStates, changeNameHandler, submitHandler } =
    useContext(StudentCtx);

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={studentStates.studentName}
        onChange={changeNameHandler}
      />
      <button type="submit">
        {studentStates.editMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
