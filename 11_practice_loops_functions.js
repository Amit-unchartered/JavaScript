let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
}

//problem 1
for(let i = 0; i < Object.keys(marks).length; i++){
    //console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//problem 2
for(key in marks){
    //console.log("the marks of " + key + " are " + marks[i])
}

//problem 3
let cn = 3;
let i;
while(i != cn){
    i = prompt("Enter a Number");
}
console.log("You have entered a correct number")

//problem 4
const mean = (a, b, c, d) => {
    return(a+b+c+d)/4 
}

console.log(mean(4,5,6,7))
