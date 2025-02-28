import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";

const StudentSection = (props) => {
  const {
    students,
    setStudents,
    setStudentName,
    setEditMode,
    setEditableStudent,
  } = props;
  const toggleList = (student) => {
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !item.isPresent };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  return (
    <div className="student-section">
      <AllStudentList
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        setEditMode={setEditMode}
        setEditableStudent={setEditableStudent}
      />
      <PresentStudentList toggleList={toggleList} students={students} />
      <AbsentStudentList toggleList={toggleList} students={students} />
    </div>
  );
};

export default StudentSection;
