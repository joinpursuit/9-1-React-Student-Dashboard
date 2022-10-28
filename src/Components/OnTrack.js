import React from 'react'
import './Student.css'

function OnTrack({student}) {
    const resume = student.certifications.resume 
    const linkedIn = student.certifications.linkedin 
    const github = student.certifications.github
    const mockInterview = student.certifications.mockInterview
    const codeWars = student.codewars.current.total > 600
    const isOnTrack = resume && linkedIn && github && mockInterview && codeWars 
  return (
    <div>
         {isOnTrack && <div><img className='ontrackimg' text='On Track' src='http://marybaldwin.edu/wp-content/uploads/2020/05/grad-hat.gif' alt='ontrack'/></div>}
    </div>
  )
}

export default OnTrack