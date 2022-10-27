export default function Aside({updatedCohortCodes, handleUpdatedCohort,}) {

    // function sortCohort() {
        for (let i = 0; i <updatedCohortCodes.length; i++) {
            // console.log(updatedCohortCodes[i].charAt(updatedCohortCodes.length - 2))
            console.log(updatedCohortCodes)
        }
    // }

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
                            {/* {console.log(cohort)} */}
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