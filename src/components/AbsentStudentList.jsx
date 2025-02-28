const AbsentStudentList = (props) => {
  const { students, toggleList } = props;

  const absentStudentList = students.filter((item) => item.isPresent === false);
  return (
    <div className="list absent-students">
      <h2>Absent Students</h2>
      <ul>
        {absentStudentList.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => toggleList(student)}>Swap Attendance</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AbsentStudentList;
