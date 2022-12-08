

export default function Cohort({data, setCohort}) {
    const cohortList = [
        ...new Set(data.map((students) => students.cohort.cohortCode))
    ]

    const handleClick = (e) =>{
         setCohort(e.target.value)
           
    }

    return(
        <div className="classDate">
            <h2>Choose a Class by Start Date</h2>
            <ul>
                <button value="All Students" onClick={handleClick}>All Students</button>
                {cohortList.map((year) => {
                    return (
                        <div>
                            <button 
                                value={year} 
                                setCohort={setCohort}
                                onClick={handleClick}>
                            </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}