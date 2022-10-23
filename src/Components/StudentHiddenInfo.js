import React from 'react';
import Certifications from './Certifications';
import CodeWars from './CodeWars';
import Notes from './Notes';
import Scores from './Scores';

function StudentHiddenInfo({studentId, clicked, id, data}) {
    // filter student  that matches student Id
    const thisStudent = data.filter(({id}) => id === studentId)
    

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
            <hr />
            {/* notes component here */}
            <Notes 
            thisStudent= {thisStudent} />
        </div>
    );
}

export default StudentHiddenInfo;

