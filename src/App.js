import Records from "./data/data.json";
import { useState } from "react";
import StudentList from "./Components/StudentList";
import Header from "./Components/Header";
import Cohort from "./Components/Cohort";

function App() {
  const [titleOption, setTitleOption] = useState("All Students");
  const [studentListOption, setStudentListOption] = useState(Records);
  const [totalOption, setTotalOption] = useState(Records.length);

  return (
    <div className="App">
      <Header />
      <aside>
        <Cohort
          Records={Records}
          titleOption={titleOption}
          totalOption={totalOption}
          setTotalOption={setTotalOption}
          setTitleOption={setTitleOption}
          setStudentListOption={setStudentListOption}
        />
      </aside>
      <div className="Main">
        <main>
          <StudentList
            setTotalOption={setTotalOption}
            totalOption={totalOption}
            titleOption={titleOption}
            Records={Records}
            studentListOPtion={studentListOption}
          />
        </main>
      </div>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
