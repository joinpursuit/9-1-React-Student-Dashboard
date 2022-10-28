import React from "react";
import {useState} from "react"
import Student from "./Student";



function Class({Data, setClassSeason}) {
   
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

let sortedSemester = semester

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
                    
                       <li id="listofSeason" onClick={()=>{handleClick(semester); }}>{semester}</li>
                          
                           
                        </div>
                        )
                    })
                }
        
            </aside>
        </div>
    );
}

export default Class;


