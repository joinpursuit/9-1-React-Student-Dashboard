
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
    // sort descending .sort(function(a, b){return b-a})
    return array
}

// function to take in cohort name (id value) and filter students by cohortcode 






// function date -> month 
export function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' });
  }