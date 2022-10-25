import React, {useState} from 'react';
import Data from '../data/data.json'
import StudentDetails from './StudentDetails';

const Student = () => {

    const [showDetails, setShowDetails] = useState(false)

    function toggleStudentDetails() {
        setShowDetails(!showDetails);
      }

    function percentScore(num1,num2) {
        return Math.round((num1/num2) *100)
    }

    function checkCertificate(x) {
        if (x === true) {
            return "❌"
        } else {
            return "✅"
        }
    }

    function getBirthday() {
        const date = new Date()

        return date.toLocaleDateString('en-US', {
            year:  'numeric',
            month: 'long',
            day:   'numeric',
        })
    }

    const students = Data.map((data) => {
        return (
            <div className="cards" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: "8px", padding: "20px", borderRadius: "8px"}}>
                    <div className='students'>
                        <h4>{data.names.preferredName} {`${data.names.middleName[0].toUpperCase()}.`} {data.names.surname}</h4>
                        <p>{data.username}</p>
                        <p>Birthday: {getBirthday(data.dob)}</p>
                        <img className="photo" src={data.profilePhoto} alt="" style={{height: "140px", width:"140px"}} />
                        <StudentDetails data={data} />
                    </div>
                </div>
        )
    })

    return (
        <div>
            {students}
        </div>
    );
};

export default Student;