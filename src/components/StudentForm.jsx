import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";
import TypingPlaceholderInput from "./TypingPlaceholderInput";

const StudentForm = () => {
  const { studentStates, changeNameHandler, submitHandler } =
    useContext(StudentCtx);

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <div className="input-container">
        <TypingPlaceholderInput
          value={studentStates.studentName}
          onChange={changeNameHandler}
          className="typing-placeholder-input compact-input"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {studentStates.editMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
