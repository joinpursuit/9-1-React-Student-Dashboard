import "./App.css";
function App() {
  return (
    <div className="all">
      <div className="header">
        <h1>Student Dashboard</h1>
      </div>
      <div className="body" id="body">
        <div className="cohort" id="cohort">
          <h2>Choose a Class by Start Date</h2>
        </div>
        <div className="students" id="students">
          <h2>All Students</h2>
          <h3>Total Students:</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
