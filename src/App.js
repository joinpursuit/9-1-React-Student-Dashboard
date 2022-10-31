import React from "react";
import { useState } from "react";
import records from "./data/data.json";
import Header from "./Components/Header";
import Cohort from "./Components/Cohort";
import Fellows from "./Components/Fellows";
import { result } from "./Helper/main.js";
import "./App.css";

function App() {
  const [fellows, setFellows] = useState({
    all: records,
    cohortYear: result(records),
    selected: records,
  });

  const sortNames = (records) => {
    const val = Object.keys(result(records));

    const names = val.map((cohortname) => cohortname);

    return names;
  };

  const formatCode = (val) => {
    if (val) {
      const formattedCode = `${val.substring(0, val.length - 4)} ${val.substring(
        val.length,
        val.length - 4
      )}`;
      return formattedCode;
    } else {
      return "";
    }
  };

  const [cohortNames] = useState(sortNames(records));

  const [cohort, setCohort] = useState("");

  const selectCohort = (cohortCode) => {
    if (cohortCode) {
      setCohort(cohortCode);

      const selected = fellows.cohortYear[cohortCode];

      setFellows({ ...fellows, selected });
    } else {
      setFellows({ ...fellows, selected: [...fellows.all] });
      setCohort("");
    }
  };

  return (
    <div className="App">
      <div>
        <header>
          <Header />
        </header>
      </div>
      <div>
        <main>
          <aside>
            <Cohort cohortNames={cohortNames} 
            selectCohort={selectCohort}
            formatCode={formatCode}
            />
            
            
          </aside>
          <section>
            <Fellows cohort={cohort} 
            fellows={fellows}
            formatCode={formatCode}/>
            
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
