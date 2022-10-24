
// function to conver middle Name
export function middleName(value) {
    const arr = value.split(``)
    return `${arr[0].toUpperCase()}.`
}

// function to sort Cohort List
export function sortCohort(arrOfObj) {
    const array = ["All Students"]

    arrOfObj.forEach(({cohort}) => {
        const split = cohort.cohortCode.replace(`2`, ` 2`)
        if(!array.includes(split)){
            array.push(split)
        }
    })
    // sort descending .sort(function(a, b){return b-a})
    const sortedArr = array.sort((a,b) => 
        (b.split(` `)[1] ) - (a.split(` `)[1])
    )
    return sortedArr
}

// function for Calculating Codewar Goal percent
export function goalPercent(num1,num2) {
    return Math.round((num1 / num2) *100)
}

// function for determining codewar percent color
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

// function number -> month equivalent for birthday
export function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' });
  }
