import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";
import TypingPlaceholderInput from "./TypingPlaceholderInput"; // Ensure this line is present

const StudentForm = () => {
  const { studentStates, changeNameHandler, submitHandler } =
    useContext(StudentCtx);

  return (
    <form onSubmit={submitHandler}>
      <div className="input-container">
        <TypingPlaceholderInput
          value={studentStates.studentName}
          onChange={changeNameHandler}
          className="typing-placeholder-input compact-input" // Add this line
        />
        <label className={studentStates.studentName ? "filled" : ""}>
          {/* Remove the static text */}
        </label>
      </div>
      <button type="submit">
        {studentStates.editMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
