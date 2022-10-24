import { useState } from "react";
import Header from "./Components/Header";
import Students from "./Components/Students";
import data from "./data/data";

function App() {
  return (
    <div>
      <Header />
      <Students students={data} />
    </div>
  );
}

export default App;
