import Cohort from "./Cohort"

function Cohorts({filteredYears, handleFilter}) {

    return (
        <div>
        <h2>Choose a Class by Start Date</h2>
        <h3 onClick={(event) => handleFilter(event)}>All Students</h3>
        {filteredYears.map((year) => {
            return <Cohort year={year} key={year} handleFilter={handleFilter}/>
        })}
        </div>
    )
}

export default Cohorts