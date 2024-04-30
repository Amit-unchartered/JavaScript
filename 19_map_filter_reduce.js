let arr = [45, 23, 21]

//array map method -> we will get a new array
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value+index
})
console.log(a)

//Array filter method --> filters an array with values that passes a test. Creates a new array
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) =>{
    return a<10
})
console.log(a2, arr2)

//Array reduce Method --> they reduce array to a single value
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1,h2) => {
    return h1+h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(arr3)
