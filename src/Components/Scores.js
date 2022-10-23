import React from 'react';

function Scores({scores}) {
    const assignments = scores.scores.assignments * 100
    const projects = scores.scores.projects * 100
    const assessments = scores.scores.assessments * 100
    return (
        <div>
            <h4>Scores:</h4>
            <p>Assignments: {assignments}%</p>
            <p>Projects: {projects}%</p>
            <p>Assessments: {assessments}% </p>
        </div>
    );
}

export default Scores;