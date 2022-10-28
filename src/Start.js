import React from "react";
import {useState} from "react"
import StudentDetails from "./StudentDetails";



function Class({data, setStudentData}) {
   
let startDates = [
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

function handleClick(startDates) {
    if (startDates === "All Students"){
        return setStudentData(data)
 }
    let filteredArray = data.filter((student)    =>   
    student.cohort.cohortCode === startDates
)

setStudentData(filteredArray)
}

    return (
        <div className="cohort-list">
            <aside>
                <h4>Choose a Class by Start Date</h4>
                {
                    startDates.map((startDates)=>{
                        return (
                            <div>
                       <button className="cohort-button" onClick={()=>handleClick(startDates)}>{startDates}</button>   
                            </div>
                        )
                    })
                }
            </aside>
        </div>
    );
}

export default Class;
