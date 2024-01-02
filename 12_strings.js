let name = "Amit"
console.log(name.length)
console.log(name[0])
console.log(name[1])
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

