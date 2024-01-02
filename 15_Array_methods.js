//Array Methods
let num = [5, 2, 3, 34, 4]
let b = num.toString() // b is now a string
console.log(b, typeof b)

//join() --> joins all the array using a seperator
let c = num.join("_")
console.log(c, typeof c) //returns string

//pop() --> removes last value from the array, updates the original array, returns the popped value
let d = num.pop()
console.log(num, d, typeof d)

//push --> adds a new element to the end of the array
//modifies the original array, returns the new array length
let e = num.push(56)
console.log(num, e)

//shift() --> removes the first element and returns it
//it modifies the original array, returns the first element
let f = num.shift()
console.log(num , f)

//unshift() --> adds element to the beginning, returns new array length
let g = num.unshift(15)
console.log(g,num)