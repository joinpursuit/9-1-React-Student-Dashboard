import Records from "./data/data.json";
import { useState } from "react";
import StudentList from "./Components/StudentList";
import Header from "./Components/Header";
import Cohort from "./Components/Cohort";
import Footer from "./Components/Footer";
function App() {
  const [heading, setHeading] = useState("All Students");
  const [showOption, setShowOption] = useState(""); //
  const [studentOption, setStudentOption] = useState([]);
  const [cohortOption, setCohortOption] = useState(""); //
  const [totalOption, setTotalOption] = useState("");

  return (
    <div className="App">
      <Header />
      <div className="Main">
        <aside>
          <Cohort
            // removeDuplicates={removeDuplicates}
            cohortOption={cohortOption}
            Records={Records}
          />
        </aside>
        <main>
          <StudentList Records={Records} />
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
