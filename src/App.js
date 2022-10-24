import { useState } from "react";
import Header from "./Components/Header";
import Students from "./Components/Students";
import Cohorts from "./Components/Cohorts";
import data from "./data/data";

function App() {
  const [cohorts, setCohorts] = useState([]);
  let cohortArr = [];

  const cohortListAside = () => {
    data.forEach((el) => {
      cohortArr = [...cohortArr, el.cohort.cohortCode];
    });
    const cohortSet = new Set(cohortArr);
    const arrOfCohorts = Array.from(cohortSet);
    setCohorts([...cohorts, arrOfCohorts]);

    console.log("###state###", cohorts);
  };

  // cohortListAside();

  return (
    <div className="page">
      <Header />
      <Cohorts cohorts={cohorts} cohortListAside={cohortListAside} />
      <Students students={data} />
      {/* <button onClick={cohortList}>click</button> */}
    </div>
  );
}

export default App;
