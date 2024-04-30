let title = "Amit"
console.log(title.length)
console.log(title[0])
console.log(title[1])
let friend = 'prakash'
console.log(friend)
//let myfriend = "Shubh' //never do it
//console.log(myfriend)


//Template Literals-->Template literals are literals delimited with backtick (`) characters
let boy1 = "pramod"
let boy2 = "nikhil"
//i need to print --> nikhil is a friend of pramod

let sentence = `${boy2} is a friend of ${boy1}`
//we can insert variable directly in template literal. This is called string interpolation.
console.log(sentence)

//Escape sequence characters
//let book = 'angelas D' veags' //JS will misunderstood D' as an single quote
let book = 'angelas D\' veags'
console.log(book)
//there are more escape characters like \n \t \r

// \r --> carriage return --> It is a (non-printable) control character used to
// reset device or cursor's position to beginning of same or current line of text.

let him = "Harry\""
console.log(him.length)

console.log(him.toUpperCase())
console.log(him.toLowerCase())

console.log(him.slice(2,4))
console.log(him.slice(2))
console.log(him.replace("har", "per"))

let name1 = "harry"
let name2 = "naman"
console.log(name1.concat(" yes ",name2)) //we can also use + operator

let name3 = "   Amit   "
console.log(name3)
console.log(name3.trim())
console.log(name3)
/*toUpperCase() --> it is a function
length is a method --> difference between function and method is that
Functions can take input arguments and return output values. On the other hand,
a method is a function that is associated with an object in object-oriented programming.
*/

//string is immutable, we can't change the original string, after applying any method or function new string is retunrned, original string remains same.
