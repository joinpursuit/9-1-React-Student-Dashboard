import "./App.css";

function App() {
  return (
    <div>
      <header>Student Dashboard</header>
      <main className="main">
        <aside className="cohortsList">
          <h2>Choose a Class by Start date</h2>
          <ul>
            <li>All coursed</li>
            <li>Winter2026</li>
            {/* ... */}
          </ul>
        </aside>
        <div className="students">
          <h2>All Students</h2>
          <p>Total: 250</p>
          <div>Student1</div>
          <div>Student1</div>
          <div>Student1</div>
          <div>Student1</div>
        </div>
      </main>
    </div>
  );
}

export default App;
