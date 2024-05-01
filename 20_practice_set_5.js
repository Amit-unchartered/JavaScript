// //problem 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// //problem 2
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 83]
// do{
//     let a = prompt("Enter a number")
//     a = Number.parseInt(a)   
//     arr2.push(a) 
// }while(a != 0)
// console.log(arr2)

//problem 3
let arr3 = [1, 2, 3, 40, 5, 60, 70, 83, 630]
let n = arr3.filter((a) => {
    return a%10==0
})
console.log(n)

//problem 4
let arr4 = [1, 2, 3, 40, 5, 60, 70, 83, 630]
let t = arr3.map((a) => {
    return a*a
})
console.log(t)

//problem 5
let arr5 = [1, 2, 3, 4, 5]
let f = arr5.reduce((x1, x2) => {
    return x1*x2
})
console.log(f)