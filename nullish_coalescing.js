//Since 0 is not a positive/natural number, it is a falsy value. 
let theNumber = 0
let number = theNumber || 5
console.log(number) // output is 5

//Using nullish coalescing(??) - The right-hand side value will only be assigned if the left-hand side value is equal to undefined or null.

theNumber = 0
number = theNumber ?? 5
console.log(number) // output is: 0

theNumber = null
number = theNumber ?? 5
console.log(number) // output is: 5