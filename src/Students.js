import { useState } from "react";
import StudentDetails from "./StudentDetails";

function Students({data, studentData}) {
    const [showMore, setShowMore] = useState(false);
    const [category, setCategory] = useState("All Students")

        return (
            <div>
                <h2>All Students: {studentData.length}</h2>
            { 
               studentData.map((student) => {
                    
                    return (
                        <StudentDetails student={student}/>
                    )
                }) // End of .map function.
            } 
            </div>
    ) // End of entire return which displays elements to the page.
} // End of Students function.


export default Students;