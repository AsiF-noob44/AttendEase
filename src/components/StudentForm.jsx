import { useContext } from "react";
import { StudentCtx } from "../contexts/Student"; // Updated import

const StudentForm = () => {
  const { editMode, studentName, changeNameHandler, submitHandler } =
    useContext(StudentCtx);

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={studentName} onChange={changeNameHandler} />
      <button type="submit">
        {editMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
