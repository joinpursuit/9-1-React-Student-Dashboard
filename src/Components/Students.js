import Details from "./Details"

export default function Students ({ students, cohort, showDetails, setShowDetails }){

    return (
        <div>
            <h2>{cohort}</h2>
            <p>Total Students: {students.length}</p>
            {
                students.map((student) => {

                    //Creating variables to format name
                    const first = student.names.preferredName
                    const middle = student.names.middleName.charAt(0)
                    const last = student.names.surname
                    const fullName = `${first} ${middle}. ${last}`

                    //React components for each student
                        return(
                            <div className="student" key={student.id}>
                                <img src={student.profilePhoto}/>
                                <div>
                                    <h4>{fullName}</h4>
                                    <p>{student.username}</p>
                                    <p><span>Birthday: </span>{student.dob}</p>
                                    {
                                        showDetails 
                                        ?
                                        <>
                                            <button onClick={() => setShowDetails(!showDetails)}>See Less...</button>
                                            <Details student={student}/> 
                                        </>
                                        :
                                        <button onClick={() => setShowDetails(!showDetails)}>See More...</button>
                                    }
                                    
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}