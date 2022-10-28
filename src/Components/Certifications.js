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
            <p><b>Resume: </b>{resume}</p>
            <p><b>LinkedIn: </b>{linkedIn}</p>
            <p><b>Mock Interview: </b>{mockInterview}</p>
            <p><b>Github: </b>{gitHub}</p>
          </aside>
    </div>
  )
}

export default Certifications