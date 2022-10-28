import MoreDetails from './MoreDetails'
import Form from './Form'

export default function studentList({data,studentTotal,currentCohort,setStudentTotal,detailsState,showButton,displayDetails,handleTextChange,setNote,note,handleSubmit}){

let i = 0

let studentDetails = data.map((e)=>{

    
    if(currentCohort==="All Students"){
        i++

        return (
            <li key={e.id}> 
            <img src={e.profilePhoto} />
            <div>{e.names.preferredName + " " + e.names.middleName + " " + e.names.surname}</div> 
            <div>{e.username}</div>
            <div>Birthday: {e.dob}</div>
            <br></br>
                <MoreDetails
                data={e} />
               
                <div><Form
                handleTextChange={handleTextChange}
                setNote = {setNote}
                note={note}
                handleSubmit={handleSubmit} /></div>
            <br></br>
            </li>
          
        ) 
    }
    
    else if(currentCohort.slice(0,-5) + currentCohort.slice(-4)===e.cohort.cohortCode){
        i++
    
   
    return (
            
            <li key={e.id}> 
            <img src={e.profilePhoto} />
            <div>{e.names.preferredName + " " + e.names.middleName + " " + e.names.surname}</div> 
            <div>{e.username}</div>
            <div>Birthday: {e.dob}</div>
            <br></br>
            <MoreDetails
                data={e} />
               
                    <Form 
                    handleTextChange={handleTextChange}
                    setNote = {setNote}
                    note={note}
                    handleSubmit={handleSubmit}
                    />
            <br></br>

            </li>
          
        )
    }
     })

    // let selectedCohort = data.filter((e)=> currentCohort.slice(0,-5) + currentCohort.slice(-4)===e.cohort.cohortCode)
console.log(i)
setStudentTotal(i)
    return (
        <>
        <div> {currentCohort} </div>
            <div> Total Students: {studentTotal}</div>
            <ul> 
                {studentDetails}
            </ul>
        </>
    )
}