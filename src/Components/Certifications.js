import React from 'react';


function Certifications({certifications}) {
    const resume = certifications.resume
    const linkedIn = certifications.linkedin
    const github = certifications.github
    const mockInterview = certifications.mockInterview
    const redX = <span role="img" aria-label="redXMark">❌</span>
    const greenCheck = <span role="img" aria-label="greenCheckMark">✅</span>
    
    return (
        <div className='certifications'>
            <h4>Certifications </h4>
            <p>
                <span>Resume: </span>
                {resume ? greenCheck : redX} </p>
            <p>
                <span>LinkedIn: </span>
                {linkedIn ? greenCheck : redX}</p>
            <p>
                <span>GitHub: </span>
                {github ? greenCheck : redX}</p>
            <p>
                <span>Mock Interview: </span>{mockInterview ? greenCheck : redX}</p>
        </div>
    );
}

export default Certifications;