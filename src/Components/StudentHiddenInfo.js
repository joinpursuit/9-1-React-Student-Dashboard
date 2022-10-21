import React from 'react';
import CodeWars from './CodeWars';

function StudentHiddenInfo({studentId, clicked, id, data}) {
    // find student obj that matches student Id
    const thisStudent = data.filter(({id}) => id === studentId)
    console.log(thisStudent)
    return (
        <div className ={`${id} ${clicked ? "" : "showMoreHidden"}`}>
            {
                thisStudent.map(({codewars, certifications, cohort, scores}) => {
                    // return individual, codewars, scores and certification components
                    return(
                        <CodeWars codewars={codewars} />
                    )
                })
            }
        </div>
    );
}

export default StudentHiddenInfo;

