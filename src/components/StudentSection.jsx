import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";

const StudentSection = () => {
  return (
    <div className="student-section">
      <AllStudentList />
      <PresentStudentList />
      <AbsentStudentList />
    </div>
  );
};

export default StudentSection;
