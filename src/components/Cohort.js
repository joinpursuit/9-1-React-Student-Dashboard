import './Cohort.css'
export default function Cohort({student}){
    const cohortList =[
        ...new Set(student
            .map((students) => students.cohort.cohortCode))
    ]
    //CREDIT TO BRANDON FOR USE

    const space = (e) => {
        return e.split('').slice(0, -4).join('') + " " + e.slice(1).slice(-4)
    }

    //THIS IS ADDING THE SPACE IN THE DATA. FIND A BETTER WAY TO DO THIS 
    return(
        <div className='classDate'>
            <h2>Choose a Class by Start Date</h2>
            <ul>
                {cohortList.map((cohorts, index)=>(
                    <li key={index}>
                    <button onClick={cohorts}>{space(cohorts)}
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}