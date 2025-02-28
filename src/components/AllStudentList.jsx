const AllStudentList = (props) => {
  const {
    setStudentName,
    setEditMode,
    setEditableStudent,
    students,
    setStudents,
  } = props;

  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditableStudent(student);
  };

  const removeHandler = (studentId) => {
    const updatedStudentList = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudentList);
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

  return (
    <div className="list all-students">
      <h2>All Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => editHandler(student)}>Edit</button>
            <button onClick={() => removeHandler(student.id)}>Delete</button>
            <button onClick={() => makePresentHandler(student)}>Present</button>
            <button onClick={() => makeAbsentHandler(student)}>Absent</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AllStudentList;
