//CHAPTER 1
//Q1
let a = "amit"
let num = 7
console.log(a + num)

//Q2
console.log(typeof (a + num))

//Q3
const obj = {
  name: "amit",
  section: 1,
  isPrincipal: false
}

// obj = 54 // this will throw an error bcoz it has already been declared
//so the answer is no

//Q4
obj['friend'] = "shubham"
obj['name'] = "elvish"
console.log(obj)
//yes we were able to add a new key to the object

//Q5
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict['yakka'])
console.log(dict.yakka)
//both are same