console.log("Const, let and var")
// var a = 45;
// var a = "p"
// var b = "amit"
// var c = null
// var d = undefined
let b = "AMIT"
b = 65;

const author = "amit"
//author = 5 //this throws an error because constant can't be changed

//const amit //this throws an error because const must be initialized during declaration unlike let and var

{
  let b = "this"
  console.log(b)
}
console.log(b)

//var is globally scoped while let and const are block scoped
//var can be updated and redeclared within its scope
//let can be updated but not redeclared
//const can neither be updated nor be redeclared
//var variables are initialized with undefined whereas let and const variables are not initialized
//const must be initialized during declaration unlike let and var