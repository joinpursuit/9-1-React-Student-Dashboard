import React from 'react'
import data from "../data/data.json"
import Students from "./Students"

export default function Cohorts() {

const students = data
let studentImage, studentName, studentEmail


// }
// [
//     {
//       "id": "D8-hEWB",
//       "names": {
//         "preferredName": "Israel",
//         "middleName": "Benjamin",
//         "surname": "Rodriguez"
//       },
//       "username": "israel.rodriguez@pursuit.org",
//       "dob": "2/3/1979",
//       "profilePhoto": "https://fakeface.rest/thumb/view?gender=male&minimum_age=38&maximum_age=48",
//       "codewars": {
//         "current": { "total": 1804, "lastWeek": 144 },
//         "goal": { "total": 850, "lastWeek": 75 }
//       },
//       "certifications": {
//         "resume": false,
//         "linkedin": false,
//         "github": false,
//         "mockInterview": false
//       },
//       "notes": [
//         {
//           "commenter": "Alan R.",
//           "comment": "Israel is a pleasure to work with!"
//         }
//       ],
//       "cohort": {
//         "cohortCode": "Winter2025",
//         "cohortStartDate": "12/1/25",
//         "scores": { "assignments": 0.71, "projects": 0.7, "assessments": 0.66 }
//       }
//     },

    return (
        // <div>  <button onClick={
        //     students.map((student) =>
        //     {
        //         return(
        //             <div key={student.id} className="eachStudentBox">
        //                 <img src="students.profilePhoto" alt="student picture"/>
        //             students.profilePhot
        //             </div>
        //         )
        //     })
            
        // }>
            
        <div>  <button className ="allStudentsButton">  
            All Students</button>
        </div>
    );
}

