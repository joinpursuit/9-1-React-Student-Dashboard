import Records from "./data/data.json";
import { useState } from "react";
import StudentList from "./Components/StudentList";
import Header from "./Components/Header";
import Cohort from "./Components/Cohort";
import Footer from "./Components/Footer";
function App() {
  const [showOption, setShowOption] = useState("");
  return (
    <div className="App">
      {/* {console.log(Records[0])} */}

      <Header />
      <div className="Main">
        <Cohort />
        <StudentList Records={Records} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
