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
            <p>Current Total: {total}</p>
            <p>Last Week: {lastWeek}</p>
            <p>Goal: {goal}</p>
            <p>Percent of Goal Achieved: {percentAchieved}%</p>
        </div>
    );
}

export default CodeWars;