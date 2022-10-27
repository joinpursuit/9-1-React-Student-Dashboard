import Cohort from "./Cohort"

function Cohorts({studentData, filteredYears}) {

    return (
        <div>
        <h2>Choose a Class by Start Date</h2>
        <h3>All Students</h3>
        {filteredYears.map((year) => {
            return <Cohort year={year} />
        })}
        </div>
    )
}

export default Cohorts