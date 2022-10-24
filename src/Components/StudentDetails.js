import React, {useState} from 'react';
import Data from '../data/data.json'

const StudentDetails = () => {
    const [showDetails, setShowDetails] = useState(false)

    function toggleDogDetails() {
        setShowDetails(!showDetails);
      }

    Data.map((data) => {
        return (
            <div>
            <button onClick={toggleDogDetails}>
                {!showDetails ? "Show More..." : "Show Less..."}
            </button>
            {showDetails ? (
            <div className="student-details">
            <span>
                <h3>Codewars:</h3>
                <p>Current Total: </p>


            </span>
            </div>
        ) : null}
            
        </div>
    

        )
    })
       
};

export default StudentDetails;