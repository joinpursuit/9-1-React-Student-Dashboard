export default function cohortList({data,setCurrentCohort}){
  
    //console.log( data[0].id)
    // make cohort list to not have duplicate cohort codes.
const cohortList = [] 

    data.map((e)=>{
        if(!cohortList.includes(e.cohort.cohortCode)){
                cohortList.push(e.cohort.cohortCode)
                }
            })


            

// console.log(cohortList)
    return (
    <>
    <h4> Choose a Class by Start Date </h4>
    
        <ul>
            <li ><button onClick={()=>setCurrentCohort('All Students')}>All Students</button></li>
            {cohortList.map((info)=>{
                
                return(
             <li key={info}><button onClick={()=>setCurrentCohort(info.slice(0,-4) + " " + info.slice(-4))}>{info.slice(0,-4) + " " + info.slice(-4)}</button></li>
            )
        })}

        </ul>
     
    </>
    )
}