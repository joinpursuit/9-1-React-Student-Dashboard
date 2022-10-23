import React from 'react';
import { goalPercent } from '../data/helperFunctions';
// "codewars": {
//     "current": { "total": 1804, "lastWeek": 144 },
//     "goal": { "total": 850, "lastWeek": 75 }
//   }
function CodeWars({codewars}) {
    const total = codewars.current.total
    const lastWeek = codewars.current.lastWeek
    const goal = codewars.goal.total
    const percentAchieved = goalPercent(total,goal)
    return (
        <div className='codewars'>
            <h4>CodeWars:</h4>
            <p>
                <span>Current Total: </span>
                {total}</p>
            <p>
                <span>Last Week: </span>
                {lastWeek}</p>
            <p>
                <span>Goal: </span>
                {goal}</p>
            <p>
                <span>Percent of Goal Achieved: </span>{percentAchieved}%</p>
        </div>
    );
}

export default CodeWars;