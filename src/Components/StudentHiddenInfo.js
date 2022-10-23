import React from 'react';
import Certifications from './Certifications';
import CodeWars from './CodeWars';
import Scores from './Scores';

function StudentHiddenInfo({studentId, clicked, id, data}) {
    // find student obj that matches student Id
    const thisStudent = data.filter(({id}) => id === studentId)
    console.log(thisStudent)
    return (
        <div className ={`${id} ${clicked ? "" : "showMoreHidden"}`}>
            {
                thisStudent.map(({codewars, certifications, cohort}) => {
                    // return individual, codewars, scores and certification components
                    return(
                        <div className='studentStats'>
                            <CodeWars codewars={codewars} />
                            <Scores scores = {cohort} />
                            <Certifications certifications = {certifications} />
                        </div>
                        
                    )
                })
            }
        </div>
    );
}

export default StudentHiddenInfo;

