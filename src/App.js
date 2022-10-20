import studentData from "./data/data.json";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <section className="classes">
          <h2>Choose a Class by Start Date</h2>
        </section>
        <section className="students">
          <h2>All Students</h2>
          <p>Total Students: {"placeholder"}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
