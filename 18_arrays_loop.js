let num = [3, 54, 1, 2, 4]

// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }

//calculating sqauare of element using for each loop
num.forEach(element => {
    console.log(element*element)
});

//Array.from --> used to create array from any other object.
let title = "Harry"
let arr = Array.from(title)
console.log(arr)

//for...of --> shortcut for accessing elements of the array
for(let item of num){
    console.log(item)
}

//for...in --> it treats the index numbers as keys
for(let i in num){
    console.log(i)
}