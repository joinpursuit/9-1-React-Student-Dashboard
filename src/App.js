import Records from "./data/data.json";
import { useState } from "react";
import StudentList from "./Components/StudentList";
import Header from "./Components/Header";
import Cohort from "./Components/Cohort";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      {/* <div className="Records">{Records.map((record) => record.name)}</div> */}
      <div className="App">
        <Header />
        <div className="Main">
          <Cohort />
          <StudentList />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
