//problem 1
let str = "har\""
console.log(str.length)

//problem2
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
)
//sentence.includes(word) --> returns true if the word is found in the sentence.
// Expected output: "The word "fox" is in the sentence"

//problem3
let str2 = "Amit"
console.log(str2.toUpperCase())

//problem4
let str3 = "Please give Rs 1000"
let amount = Number.parseInt(str3.slice(15)) //changing the typeof amount from string to int
console.log(amount)
console.log(typeof amount) //it will be number since we have converted it from string to int

//problem5
let friend = "Deepika"
friend[3] = "R" //this will not throw an error.
console.log(friend) //Deepika will only be printed, it will not change the string, since the STRING IS IMMUTABLE