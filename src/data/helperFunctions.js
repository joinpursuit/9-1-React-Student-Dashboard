
// function to conver middle Name
export function middleName(value) {
    const arr = value.split(``)
    return `${arr[0].toUpperCase()}.`
}

// function to sort Cohort List
export function sortCohort(arrOfObj) {
    const array = ["All Students"]
    const seasonOrder = [`Winter`, `Fall`, `Summer`,`Spring`]
    const arr2026 = []
    const arr2025 = []
    
    // Seperate cohorts in 2 array of 4's for each year
    arrOfObj.forEach(({cohort}) => {
        const cohortCode = cohort.cohortCode
        const split = cohort.cohortCode.replace(`2`, ` 2`)

        if(cohortCode.includes(`2026`) && !arr2026.includes(split)){
                arr2026.push(split)       
        }
        else if(cohortCode.includes(`2025`) && !arr2025.includes(split)){
            arr2025.push(split)
        }
    })
    // Sort each array by referencing the ordered season array (descending a-b) (ascending b-a)
    arr2026.sort((a,b) => 
        seasonOrder.indexOf(a.split(` `)[0]) - seasonOrder.indexOf(b.split(` `)[0])
    )
    arr2025.sort((a,b) => 
        seasonOrder.indexOf(a.split(` `)[0]) - seasonOrder.indexOf(b.split(` `)[0])
    )
    
    return array.concat(arr2026,arr2025)
 
    
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
