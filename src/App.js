import { useState } from "react";

import "./App.css";
import data from "./data/data.json";
import StudentList from "./Components/StudentList";
import CohortList from "./Components/CohortList";

function App() {
  const [selected, setSelected] = useState("All Students");

  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <div className="info">
        <aside>
          <CohortList data={data} setSelected={setSelected} />
        </aside>
        <main>
          <StudentList data={data} selected={selected} />
        </main>
      </div>
    </div>
  );
}

export default App;
