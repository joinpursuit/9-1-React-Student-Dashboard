import Cohort from "./Cohort"

function Cohorts({filteredYears, handleFilter}) {


    return (
        <div className="heading">
        <h2>Choose a Class by Start Date</h2>
        <h2 className="click" onClick={(event) => handleFilter(event)}>All Students</h2>
        <div className="years">
        {filteredYears.map((year) => {
            return <Cohort year={year} key={year} handleFilter={handleFilter}/>
        })}
        </div>
        </div>
    )
}

export default Cohorts