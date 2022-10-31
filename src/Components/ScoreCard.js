import React, { useState } from 'react';
import Form from './Form';

function ScoreCard({  deets }) {
  const [show] = useState(false)

    
        let percent = ((deets.codewars.current.total / deets.codewars.goal.total) *
            100).toFixed(0); 

    return (
        <div>
            <section key={deets.id} className="person-deets">
            {show && <ScoreCard deets={deets} />}
        <article className="code-wars">
          <h3>Codewars:</h3>
          <p>Current Total: {deets.codewars.current.total}{deets.codewars.current.total}</p>
          <p>Last Week: {deets.codewars.current.lastWeek}</p>
          <p>Goal: {deets.codewars.goal.total}</p>
          <p>Percent of Goal Achieved: {percent} % </p>
          {((deets.codewars.current.total / deets.codewars.goal.total) * 100).toFixed(0) > 99 ? (
            <p><span>
              {(
                (deets.codewars.current.total / deets.codewars.goal.total) *
                100).toFixed(0)}%
              </span></p>
          ) : ((deets.codewars.current.total / deets.codewars.goal.total) *
              100).toFixed(0) > 49 ? (
            <p><span>
              {((deets.codewars.current.total / deets.codewars.goal.total) *
                100).toFixed(0)} %
              </span> </p>
          ) : ((deets.codewars.current.total / deets.codewars.goal.total) *
              100).toFixed(0) < 50 ? (
            <p><span>
              {((deets.codewars.current.total / deets.codewars.goal.total) *
                100).toFixed(0)}%
              </span></p>
          ) : null}
        </article>
        <article className="scores">
          <h3>Scores</h3>
          <p><span>Assignments: {deets.cohort.scores.assignments * 100}%</span></p>
          <p><span>Projects: {deets.cohort.scores.projects * 100}%</span></p>
          <p><span>Assessments: {deets.cohort.scores.assessments * 100}%</span></p>
        </article>
        <article>
        <h3>Certifications</h3>
        <p><span>
          Resume: {deets.certifications.resume === false ? '❌' : '✅'}
          </span></p>
        <p><span>
          LinkedIn: {deets.certifications.linkedin === false ? '❌' : '✅'}
          </span> </p>
        <p><span>
          Mock Interview: {deets.certifications.mockInterview === false ? '❌' : '✅'}
          </span> </p>
        <p><span>
          GitHub: {deets.certifications.github === false ? '❌' : '✅'}
          </span></p>
        </article>
        <Form deets={deets} />
      </section>
            
        </div>
    );
;
}

export default ScoreCard;