import React from "react";
import {useState} from "react"
import Student from "./Student";



function Class({Data, setClassSeason}) {
    // There is a title at the top of the list. (e.g. "Choose a Class by Start Date".)
    // The list contains "All Students" as the first item.
    // The cohorts listed are unique. That is, "Winter2026" does not appear more than once.

    // Tip: Each student has a cohort key which contains an object with a cohortCode key. That cohortCode key is shared by all cohorts with the same start date.

//Update your cohort list so that the following is true:

// Each cohort has a "human readable" name instead of the cohort code. (e.g. "Winter 2026" instead of "Winter2026".)
// The cohorts are organized by date, either in ascending or descending order. "All Students" should remain at the top.



// NEED TO DO A title, such as "All Students".

let semester = [
    "All Students",
    "Winter2026",
    "Fall2026",
    "Summer2026",
    "Spring2026",
    "Winter2025",
    "Fall2025",
    "Summer2025",
    "Spring2025",
]

let sortedSemester = semester.sort()
console.log(sortedSemester)

function handleClick(semester){
 if(semester === "All Students"){
    return setClassSeason(Data)
 }
 
    let newArray = Data.filter((student)    =>   
student.cohort.cohortCode === semester
 
)
 setClassSeason(newArray)

}

    return (
        <div>
            <aside>
                <h4>Choose a Class by Start Date</h4>
 
                {
                    sortedSemester.map((semester)=>{
                        return (
                            <div>
                      
                       <li onClick={()=>handleClick(semester)}>{semester}</li>
                          
                           
                        </div>
                        )
                    })
                }
        
            </aside>
        </div>
    );
}

export default Class;
