import React from 'react'

function Certifications({student}) {
const resume = student.certifications.resume ? `\u2705` : `\u274C`
const linkedIn = student.certifications.linkedin ? `\u2705` : `\u274C`
const mockInterview = student.certifications.mockInterview ? `\u2705` : `\u274C`
const gitHub = student.certifications.github ? `\u2705` : `\u274C`

  return (
    <div>
        <aside>
            <h3>Certifications</h3>
            <p>Resume: {resume}</p>
            <p>LinkedIn: {linkedIn}</p>
            <p>Mock Interview: {mockInterview}</p>
            <p>Github: {gitHub}</p>
          </aside>
    </div>
  )
}

export default Certifications