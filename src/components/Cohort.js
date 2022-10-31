import './Cohort.css'
export default function Cohort({student, setCohorts}){
    const cohortList = [
        ...new Set(student
            .map((students) => students.cohort.cohortCode))
    ]

    //New set is making sure I don't have to repeat this code.
 
    const space = (e) => {
        return e.split('').slice(0, -4).join('') + " " + e.slice(1).slice(-4)
    }
    //THIS IS ADDING THE SPACE IN THE DATA. FIND A BETTER WAY TO DO THIS 

    const handleClick = (e) =>{
        const {value} = e.target
            setCohorts(value)
    }
    return(
        <div className='classDate'>
            <h2 className="other">Choose a Class by Start Date</h2>
            <ul>
                <button value="All Students" onClick={handleClick}>All Students</button>
                {cohortList.map((cohort)=>{
                    return(
                        <div>
                            <button value={cohort} onClick={handleClick}>
                                {space(cohort)}
                            </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
