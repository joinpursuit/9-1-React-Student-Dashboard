export default function cohortList({data,setCurrentCohort}){
  
    //console.log( data[0].id)
    // make cohort list to not have duplicate cohort codes.
const cohortList = [] 
const cohortStart = []




    data.map((e)=>{
        
        if(!cohortList.includes(e.cohort.cohortCode)){
                cohortList.push(e.cohort.cohortCode)
                }
            })

cohortList.sort()
            

console.log(cohortList)
    return (
    <>
    <h4> Choose a Class by Start Date </h4>
    
        <ul>
            <li ><h3 onClick={()=>setCurrentCohort('All Students')}>All Students</h3></li>
            {cohortList.map((info)=>{
                
                return(
             <li key={info}><h3 onClick={()=>setCurrentCohort(info.slice(0,-4) + " " + info.slice(-4))}>{info.slice(0,-4) + " " + info.slice(-4)}</h3></li>
            )
        })}

        </ul>
     
    </>
    )
}