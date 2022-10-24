import React, {useState} from 'react';
import Data from '../data/data.json'

const Student = () => {
    const students = Data.map((data) => {
        return (
            <div className="cards" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: "8px", padding: "20px", borderRadius: "8px"}}>
                    <div className='students'>
                        <h4>{data.names.preferredName} {`${data.names.middleName[0].toUpperCase()}.`} {data.names.surname}</h4>
                        <p>{data.username}</p>
                        <p>Birthday: {data.dob}</p>
                        <img className="photo" src={data.profilePhoto} alt="" style={{height: "140px", width:"140px"}} />
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