//chapter 2 practice set
//q1
const prompt = require('prompt-sync')();
// let age = prompt("What is your age?");
// age = Number.parseInt(age);
// if (age > 10 && age <= 20) {
//   console.log("your age lies between 10 and 20")
// } else {
//   console.log("your age does not lies between 10 and 20")
// }

//q2
// let age = prompt("What is your age?")
// switch (age) {
//   case '12':
//     console.log("your age is 12")
//     break
//   case '13':
//     console.log("your age is 13")
//     break
//   case '14':
//     console.log("your age is 14")
//     break
//   default:
//     console.log("your age is not special")
// }

//q3
// let product = prompt("Enter the number")
// product = parseInt(product) //converting the number to integer
// if (product % 2 == 0 && product % 3 == 0) {
//   console.log("The number is divisible by 2 and 3")
// } else {
//   console.log("The number is not divisible by 2 and 3")
// }

//q4
let age = prompt("What is your age?")
let a = age > 18 ? console.log("you can drive") : console.log("you cannot drive")