import Start from "./Start";
import Students from "./Students"
import data from "./data/data.json";
// import StudentsDetails from "./StudentDetails";


function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <Start />
      <Students studentData={data} />
      {/* <StudentsDetails /> */}
    </div>
)

}
export default App;
