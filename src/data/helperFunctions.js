
export function middleName(value) {
    const arr = value.split(``)
    return `${arr[0].toUpperCase()}.`
}

export function sortCohort(arrOfObj) {
    const array = []
    arrOfObj.forEach(({cohort}) => {
        if(!array.includes(cohort.cohortCode)){
            array.push(cohort.cohortCode)
        }
    })
    return array
}
