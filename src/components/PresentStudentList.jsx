const PresentStudentList = (props) => {
  const { students, toggleList } = props;
  const presentStudentList = students.filter((item) => item.isPresent === true);

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
