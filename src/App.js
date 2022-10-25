import { useState } from "react";
import Data from "./data/data.json";
import Aside from "./Components/Aside";
import Main from "./Components/Main";

import "./App.css";

function App() {
  const [array, setArray] = useState([]);

  return (
    <div className="app">
      <div className="header">
        <h1>Student Dashboard</h1>
      </div>
      <div className="side">
        <Aside Data={Data} />
      </div>
      <div className="main">
        <Main Data={Data} />
      </div>
    </div>
  );
}

export default App;
