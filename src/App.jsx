import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <h1>AttendEase</h1>
      <StudentForm />
      <StudentSection />
    </div>
  );
}

export default App;
