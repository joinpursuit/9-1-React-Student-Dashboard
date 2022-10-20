import Header from "./components/Header";
import Cohort from './components/Cohort'
import Students from './components/Students'
import "./App.css"

function App() {
  return (
    <div className="wrap">
     <Header/>
     <Cohort/>
     <Students/>
    </div>
  );
}

export default App;
