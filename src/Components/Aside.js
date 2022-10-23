export default function Aside({updatedCohortCodes, handleUpdatedCohort,}) {

    return(
        <div className="aside">
            <h2>Choose a Class by Start Date</h2>
            <ul>
                <li>
                    <button onClick={()=>{handleUpdatedCohort()}}>
                        All Students
                       
                        </button>
                        </li>
                {updatedCohortCodes.map(cohort => {
                    return(
                        <li>
                            <button onClick={() =>{handleUpdatedCohort(cohort.split(' ').join(''))}}>
                                {cohort}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}