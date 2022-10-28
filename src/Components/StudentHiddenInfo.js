import React from 'react';
import Certifications from './Certifications';
import CodeWars from './CodeWars';
import Notes from './Notes';
import Scores from './Scores';

function StudentHiddenInfo({studentId, id, students}) {
    // filter student  that matches student Id
    const thisStudent = students.filter(({id}) => id === studentId)

    return (
        <div className = {id} >
            {
                thisStudent.map(({codewars, certifications, cohort}) => {
                    // return individual, codewars, scores and certification components
                    return(
                        <div 
                        className='studentStats'
                        key = {id}>
                            <CodeWars codewars={codewars} />
                            <Scores scores = {cohort} />
                            <Certifications certifications = {certifications}/>
                        </div>
                        
                    )
                })
            }
            <hr />

            <Notes 
            thisStudent= {thisStudent} />

        </div>
    );
}

export default StudentHiddenInfo;

