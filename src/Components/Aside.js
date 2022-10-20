export default function Aside(cohorts) {
    return(
        <div className="aside">
            <h2>Choose a Class by Start Date</h2>
            <ul>
                <li>
                    <button>
                        All Students
                        </button>
                        </li>
                {/* {cohorts.map(cohort => {
                    return(
                        <li>
                            <button>
                                {cohort}
                            </button>
                        </li>
                    )
                })} */}
            </ul>
        </div>
    )
}