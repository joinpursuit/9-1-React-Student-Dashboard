const filterStudentsByCode = (students, code) => {
    return students.filter((student) => student.cohort.cohortCode === code)
}

//filterStudentsByCode(students, "Winter2026")

export default filterStudentsByCode
