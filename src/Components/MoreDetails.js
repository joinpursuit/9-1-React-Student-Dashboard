import { useState } from "react"



export default function MoreDetails ({data}) {

    const [detailsState,setDetailsState] = useState(false)
    


const displayDetails = () =>{
    

      setDetailsState(!detailsState)
    
   
  }

    return(
        
        <>
        {detailsState ? <> < h4 onClick={displayDetails}> Show Less ... </h4>
        <div className="moreDetails" >
            
        <div className="codewars">
            <p> Current Total : {data.codewars.current.total}</p>
            <p>Last Week : {data.codewars.current.lastWeek}</p>
            <p> Goal : {data.codewars.goal.total}</p>
            <p> Percentage Acheieved : {Math.round((data.codewars.goal.lastWeek/data.codewars.goal.total) * 100)}%</p>
        </div>
        <div className="scores">
            <p>Assignments: {data.cohort.scores.assignments *100} % </p>
            <p> Projects: {data.cohort.scores.projects *100} % </p>
            <p> Assessments: {data.cohort.scores.assessments *100} %</p>

        </div>
        <div className="certifications">
            <p> Resume: </p>
            <p> LinkedIn: </p>
            <p>Mock Interview:  </p>
            <p>Github: </p>
        </div>
        </div>
        </>
        : < h4 onClick={displayDetails} > Show More ... </h4> } 
        {/* < h4 onClick={displayDetails} > {showButton} </h4> */}
        </>
        )
        }