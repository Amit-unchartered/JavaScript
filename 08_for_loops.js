// const prompt = require('prompt-sync')();
// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for (let i = 1; i <= n; i++) {
//   sum = sum + i
// }
// console.log("sum of first" + n + "natural number is "+ sum)

//for in loops through the keys of an object
let obj = {
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
  }
  for (let a in obj) {
    console.log(a)
    console.log("Marks of " + a + " are " + obj[a])
  }
  
  //for of loops
  // for (let a of obj) {
  //   console.log(a)
  // }
  //this will not work since the object is not iterable
  
  for (let a of "AMIT") {
    console.log(a)
  }