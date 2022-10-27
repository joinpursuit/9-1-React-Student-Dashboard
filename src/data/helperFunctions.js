
// function to convert middle Name
 function middleName(value) {
    const arr = value.split(``)
    return `${arr[0].toUpperCase()}.`
}

// function to sort Cohort List
 function sortCohort(arrOfObj) {
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
    // Sort each array by referencing the index of the selected season in the ordered season array (descending a-b) (ascending b-a)
    arr2026.sort((a,b) => 
        seasonOrder.indexOf(a.split(` `)[0]) - seasonOrder.indexOf(b.split(` `)[0])
    )
    arr2025.sort((a,b) => 
        seasonOrder.indexOf(a.split(` `)[0]) - seasonOrder.indexOf(b.split(` `)[0])
    )
    
    return array.concat(arr2026,arr2025)
    
}

// function for Calculating Codewar Goal percent
 function goalPercent(num1,num2) {
    return Math.round((num1 / num2) *100)
}

// function for determining codewar percent color
 function codeWarsColor(percentage) {
        if(percentage < 50){
            return `red`
        }
        else if(percentage > 50 && percentage < 100 ){
            return `goldenrod`
        }
        else {
            return 'green'
        }
}

// function number -> month equivalent for birthday
// https://codingbeautydev.com/blog/javascript-convert-month-number-to-name/#:~:text=To%20convert%20a%20month%20number%20to%20a%20month%20name%2C%20create,a%20specified%20locale%20and%20options.&text=Our%20getMonthName()%20function%20takes,the%20month%20with%20that%20position
 function getMonthName(monthNumber) {
    // gives today's date
    const date = new Date();
    
    // change month of todays date to inputted param (monthNumber)
    // jan = 0, feb = 1 (index values so subtract 1 from input month num, returns abbrev. month)
    date.setMonth(monthNumber - 1);
    
    // toLocaleString(locales, options) -> locales `en-US` US format
    // "long" (e.g., March) or "short" (e.g., Mar) <- values for month key for conversion
    // object for options parameter {month: 'long' } <-
    
    return date.toLocaleString('en-US', { month: 'long' });
  }

//   function for filtering students by cohort name
function filterStudents(string, setFunction, arrOfObj) {
    const filteredStudentArray = arrOfObj.filter(({cohort}) => 
       cohort.cohortCode === string
    )
    setFunction(filteredStudentArray)
 }

  
  export {
    middleName,
    sortCohort,
    goalPercent,
    codeWarsColor,
    getMonthName,
    filterStudents
  }