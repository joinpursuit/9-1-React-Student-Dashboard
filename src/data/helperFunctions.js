
export function middleName(value) {
    const arr = value.split(``)
    return `${arr[0].toUpperCase()}.`
}

export function sortCohort(arrOfObj) {
    const array = []
    arrOfObj.forEach(({cohort}) => {
        const split = cohort.cohortCode.replace(`2`, ` 2`)
        if(!array.includes(split)){
            array.push(split)
        }
    })
    return array
}
