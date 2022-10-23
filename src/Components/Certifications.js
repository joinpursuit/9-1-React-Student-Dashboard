import React from 'react';


function Certifications({certifications}) {
    const resume = certifications.resume
    const linkedIn = certifications.linkedin
    const github = certifications.github
    const mockInterview = certifications.mockInterview
    const redX = <span role="img" aria-label="redXMark">❌</span>
    const greenCheck = <span role="img" aria-label="greenCheckMark">✅</span>
    
    return (
        <div>
            <h4>Certifications </h4>
            <p>Resume: {resume ? greenCheck : redX} </p>
            <p>LinkedIn: {linkedIn ? greenCheck : redX}</p>
            <p>GitHub: {github ? greenCheck : redX}</p>
            <p>Mock Interview: {mockInterview ? greenCheck : redX}</p>
        </div>
    );
}

export default Certifications;