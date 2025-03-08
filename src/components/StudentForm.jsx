import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";
import TypingPlaceholderInput from "./TypingPlaceholderInput";

const StudentForm = () => {
  const { studentStates, changeNameHandler, submitHandler } =
    useContext(StudentCtx);

  return (
    <form onSubmit={submitHandler}>
      <div className="input-container">
        <TypingPlaceholderInput
          value={studentStates.studentName}
          onChange={changeNameHandler}
          className="typing-placeholder-input compact-input"
        />
        <label className={studentStates.studentName ? "filled" : ""}></label>
      </div>
      <button type="submit">
        {studentStates.editMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
