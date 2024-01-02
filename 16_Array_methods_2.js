let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 215, 216, 217, 218, 219]

console.log(num.length)
delete(num[0]) //delete is not a method, it is a operator in JS

console.log(num.length) //the array length will not be changing

//concatenating
let newArray = num.concat(num_more, num_even_more)
console.log(newArray)
//it will not affect the lengths of the two concatenating strings

// sort method 
let compare = (a, b)=>{
    return a-b //for arranging in ascending order
    //return b-a // for retunrning in descending order
}
let num1 = [551, 2, 3, 14, 5, 6, 7, 8, 229]
num1.sort(compare)
console.log(num1)

//num.reverse() --> reverses the array

//splice and slice

//splice --> used to add new items to the array
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let delVal = num2.splice(2, 3, 1021, 1022, 1023, 1024, 1025) //it modifies the original array
console.log(num2, delVal)

//slice
let num3 = [1, 2, 3, 89, 5, 6, 12, 58, 9]

let newNum = num3.slice(3) //returns all the numbers from index 3, it makes new array, doesnot modifies original array
console.log(newNum)
let newNum2 = num3.slice(2,7)
console.log(newNum2)