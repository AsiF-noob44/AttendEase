const StudentForm = (props) => {
  const {
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    studentName,
    setStudentName,
  } = props;

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
