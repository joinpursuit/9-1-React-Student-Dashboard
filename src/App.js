import data from './data/data.json'
import StudentList from "./Components/StudentList";
import CohortList from './Components/CohortList';





function App() {




  return (
    <div className='topLevel'>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      
      <main>
      
      <div className="studentList">
        {/* <div>
        <h4>Li item Name</h4>
        <span>total :</span>
        </div> */}
      <StudentList
      data = {data} />
      </div>

      <aside className="cohortList">
        <h3>Choose Class</h3>
        <CohortList
        data = {data} />
      </aside>
      
      </main>

      

      <footer>FOOTER</footer>
     
    </div>
  );
}

export default App;
