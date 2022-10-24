
export function middleName(value) {
    const arr = value.split(``)
    return `${arr[0].toUpperCase()}.`
}

export function sortCohort(arrOfObj) {
    const array = ["All Students"]

    arrOfObj.forEach(({cohort}) => {
        const split = cohort.cohortCode.replace(`2`, ` 2`)
        if(!array.includes(split)){
            array.push(split)
        }
    })
    // sort descending .sort(function(a, b){return b-a})
    return array
}

// function for Calculating Codewar Goal
export function goalPercent(num1,num2) {
    return Math.round((num1 / num2) *100)
}

// function for determining percent color
export function codeWarsColor(percentage) {
        if(percentage < 50){
            return `red`
        }
        else if(percentage > 50 && percentage < 100 ){
            return `yellow`
        }
        else {
            return 'blue'
        }
}


// function date -> month for birthday
export function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' });
  }
